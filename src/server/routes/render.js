import express from 'express'
import fs from 'fs'
import path from 'path'

export default () => {
  const renderRouter = express.Router()

  renderRouter.get('/:integration_cloud/:widget_type/:instance_id', (req, res, next) => {
    const { integration_cloud, widget_type, instance_id } = req.params
    let h = process.env.PROTO
    const url = [
      h,
      req.host,
      integration_cloud,
      widget_type,
      instance_id,
      'index.html'
    ].join('/')
    return res.redirect(url)
  })

  renderRouter.get('/:integration_cloud/:widget_type/push.js', (req, res, next) => {
    const { integration_cloud, widget_type, instance_id } = req.params
    let h = process.env.PROTO

    const url = [
      h,
      req.host,
      integration_cloud,
      widget_type,
      instance_id,
      'index.html'
    ].join('/')
    return res.redirect(url)
  })

  return renderRouter
}
