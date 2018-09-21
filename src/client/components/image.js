import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Image extends Component {
  render () {
    let styles = {
      width: '100px',
      height: 'auto'
    }
    const imageUrl = `${this.props.baseUrl}${this.props.icon.preview}`
    return (
      <img src={ imageUrl } style={ styles } />
    )
  }
}

Image.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
}