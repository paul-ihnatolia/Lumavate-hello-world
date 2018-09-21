import React from 'react'
import PropTypes from 'prop-types'

export function Message (props) {
  return (
    <div className='Message'>
      <p> { props.message } </p>
    </div>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired
}
