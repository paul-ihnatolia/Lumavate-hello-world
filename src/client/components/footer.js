import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  render () {
    const styles = {
      'paddingTop': '15px',
      'paddingBottom': '15px'
    }

    return (
      <footer style={ styles }>
        <center>
          { this.props.footerText }
        </center>
      </footer>
    )
  }
}

Footer.propTypes = {
  footerText: PropTypes.string.isRequired
}
