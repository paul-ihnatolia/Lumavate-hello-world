import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Message } from './components/message'
import WidgetType from './components/widgetType'
import WidgetData from './components/widgetData'
import Footer from './components/footer'

class App extends Component {
  render () {
    const tokenData = JSON.stringify(this.props.apiContext.tokenData)
    const componentType = this.props.componentsData.pageType ? this.props.componentsData.pageType.componentType : 'usual'
    const widgetData = {
      baseUrl: this.props.componentsData.baseUrl,
      helloColor: this.props.componentsData.helloColor || '#ffffff',
      helloIcon: this.props.componentsData.helloIcon || {},
      helloCheckbox: this.props.componentsData.helloCheckbox || false,
      helloToggle: this.props.componentsData.helloToggle || false,
      helloTranslatedText: this.props.componentsData.helloTranslatedText || '',
      helloNumeric: this.props.componentsData.helloNumeric || '',
      helloDropdown: this.props.componentsData.helloDropdown || '',
      helloMultiselect: this.props.componentsData.helloMultiselect || [],
      helloPageLink: this.props.componentsData.helloPageLink || {}
    }

    const styles = {
      Token: {
        width: '100%',
        overflow: 'scroll'
      }
    }

    return (
      <div className='App'>
        <Message message={ this.props.componentsData.message } />
        <h2>Microsite Context Hello</h2>
        <h3>Activation Data</h3>
        { this.props.apiContext.activationData }
        <div className="Token" style={styles.Token}>
          <h3>TokenData</h3>
          { tokenData }
        </div>
        <WidgetType componentType={ componentType } />
        <WidgetData widgetData={ widgetData } />
        <Footer footerText={ this.props.componentsData.footerText } />
      </div>
    )
  }
}

App.propTypes = {
  componentsData: PropTypes.object,
  apiContext: PropTypes.object
}

export default App
