import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/app'
import routes from './routes'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { makeRequest } from './utils/makeRequest'
import { SimpleDbOperator } from './utils'

import axios from 'axios'

const app = express()

let staticDir = path.join(__dirname, '../../dist')

if (process.env.NODE_ENV === 'development') {
  const devMiddleware = require('./devMiddleware') // eslint-disable-line
  staticDir = path.join(__dirname, '../client')

  app.use(devMiddleware.WDM)
  // app.use(devMiddleware.WHM)
}

// Middleware
app.use(express.static(staticDir))
app.use(process.env.WIDGET_URL_PREFIX + '/static', express.static(staticDir))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes())

app.get('/:integration_cloud/:widget_type/:instance_id/index.html', async (req, res, next) => {
  const jwtToken = req.cookies.pwa_jwt
  app.set('jwtToken', jwtToken)

  const requestUrl = '/pwa/v1/widget-instances/' + req.params.instance_id
  let componentsData = {}
  let apiContext = {}

  try {
    const resp = await makeRequest('get', requestUrl, jwtToken, {})
    componentsData = resp.data.payload.data
    componentsData.additional = {}
    // Try to store sample data in the DB

    try {
      let db = new SimpleDbOperator('event-attendees', jwtToken)
      let serial = await db.getThing()
      if (serial) {
        try {
          let sortedData = await db.getSortedScoreCollection(serial)
          componentsData.additional.sortedData = sortedData
        } catch (error) {
          componentsData.additional.error = error
          console.log('Error on savescore')
          console.log(error.response)
        }
      } else {
        componentsData.additional.error = 'Serial is empty'
        console.log('Serial is empty')
      }
    } catch (error) {
      console.log(error)
    }

  } catch (error) {
    if (error.response) {
      if (error.response.status == 401) {
        // Any non-200 status indicates a need to attempt a refresh of auth
        // credentials.  We can redirect to the root to refresh the cookie
        const { integration_cloud, widget_type, instance_id } = req.params
        const h = process.ENV.PROTO
        const url = [
          h,
          req.host,
          integration_cloud,
          widget_type,
          instance_id
        ].join('/')
        return res.redirect(url)
        await makeRequest('get', '/pwa/v1/activation', jwtToken, {})
      } else if (error.response.status === 404) {
        console.log('Instance not found')
      } else {
        console.log(error.response)
        console.log(`Error getting widget data! status code=${error.response.status}`)
      }
    } else if (error.request) {
      console.log(error.request)
    }
  }

  try {
    const activationResp = await makeRequest('get', '/pwa/v1/activation', jwtToken, {})
    apiContext.activationData = activationResp.data.payload.data
  } catch (error) {
    if (error.response && error.response.status == 404) {
      apiContext.activationData = 'No activation data'
    } else {
      apiContext.activationData = error.response.data
    }
  }

  try {
    const tokenResp = await makeRequest('get', '/pwa/v1/token', jwtToken, {})
    apiContext.tokenData = tokenResp.data.payload.data
  } catch (error) {
    if (error.response && error.response.status == 404) {
      apiContext.tokenData = 'No token data'
    } else {
      apiContext.tokenData = error.response.data
    }
  }

  // Add base url to process image
  componentsData.baseUrl = process.env.PROTO + req.host
  // Loads a template.
  const pathToHtml = staticDir + '/index.html'
  const template = fs.readFileSync(pathToHtml, 'utf8')
  // Inserts a rendered react component to the loaded template (server-side rendering).
  const props = {componentsData: componentsData, apiContext: apiContext}
  const renderedApp = renderToString(React.createElement(App, props))
  const page = template.replace('<!-- CONTENT -->', renderedApp)

  res.status(200).send(page)
})

// Opens a socket and listens for connections only if there is no parent module running the script.
if (!module.parent) {
  app.listen(8080, () => {
    console.log('Server started on port 8080...')
  })
}

export default app
