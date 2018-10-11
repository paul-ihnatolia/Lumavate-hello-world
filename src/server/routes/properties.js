import express from 'express'
import { makePayload } from '../utils'
import { PROPERTIES, COMPONENTS } from '../constants'
export default () => {
  const propertyRouter = express.Router()

  propertyRouter.get('/:integration_cloud/:widget_type/discover/properties', (req, res, next) => {
    res.json(makePayload(PROPERTIES))
  })

  propertyRouter.get('/:integration_cloud/:widget_type/discover/components', (req, res, next) => {
    res.json(makePayload(PROPERTIES))
  })

  return propertyRouter;
}
