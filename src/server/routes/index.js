import express from 'express'
import properties from './properties'
import renderRoute from './render'

export default () => {
  const router = express.Router()

  router.use(properties())
  router.use(renderRoute())

  return router
}