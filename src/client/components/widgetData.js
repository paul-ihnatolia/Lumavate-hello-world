import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from './image'

export default class WidgetData extends Component {
  render () {
    const widgetData = this.props.widgetData
    return (
      <div className="widgetData">
        <h2> Widget Data </h2>
        <table width='100%' border='2' cellPadding='0' cellSpacing='0'>
          <tr>
            <td>Color</td>
            <td bgcolor={ widgetData.helloColor }></td>
          </tr>
          <tr>
            <td>Image</td>
            <td>
              { widgetData.helloIcon.previewSmall &&
                <Image baseUrl={ widgetData.baseUrl } icon={ widgetData.helloIcon } />
              }
              { !widgetData.helloIcon.previewSmall && <p>No Image</p> }
            </td>
          </tr>
          <tr>
            <td>Checkbox</td>
            <td>{ widgetData.helloCheckbox ? 'checked' : 'unchecked' }</td>
          </tr>
          <tr>
            <td>Toggle</td>
            <td>
              { widgetData.helloToggle ? 'on' : 'off' }
            </td>
          </tr>
          <tr>
            <td>Translated text</td>
            <td>{ widgetData.helloTranslatedText }</td>
          </tr>
          <tr>
            <td>Numeric</td>
            <td>{ widgetData.helloNumeric }</td>
          </tr>
          <tr>
            <td>Dropdown</td>
            <td>{ widgetData.helloDropdown }</td>
          </tr>
          <tr>
            <td>Multiselect</td>
            <td>{ widgetData.helloMultiselect.join(', ') }</td>
          </tr>
          <tr>
            <td>Link</td>
            <td>
              Mode: { widgetData.helloPageLink.mode }
              <br/>
              Page: { widgetData.helloPageLink.url }
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

WidgetData.propTypes = {
  widgetData: PropTypes.object.isRequired
}
