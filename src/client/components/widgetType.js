import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class WidgetType extends Component {
  render () {
    const componentType = this.props.componentType
    return (
      <div className="WidgetType">
        {
          componentType === 'auth' &&
          <h2> This is the auth widget </h2>
        }
        {
          componentType !== 'auth' &&
          <h2> This is NOT auth widget </h2>
        }
      </div>
    )
  }
}

WidgetType.propTypes = {
  componentType: PropTypes.string.isRequired
}
