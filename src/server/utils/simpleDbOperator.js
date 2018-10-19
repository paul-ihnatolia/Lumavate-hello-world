import { makeRequest } from '../utils/makeRequest'

export class SimpleDbOperator {
  constructor (categoryName, jwt) {
    this.categoryName = categoryName
    this.jwt = jwt
  }

  getCategoryName () { return this.categoryName }

  async getThingSerial () {
    let url = '/pwa/v1/token'
    let tokenBody = await makeRequest('get', url, this.jwt, {})
    let namespace = tokenBody.data.payload.data.namespace || 'test'
    return `spot_${namespace}`
  }

  async getThing () {
    let thingSerial = this.getThingSerial()
    let url = `/pwa/v1/things/${thingSerial}`

    try {
      await makeRequest('get', url, this.jwt, {})
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Is not created yet
        try {
          const url = '/pwa/v1/things'
          const data = { 'SerialNumber': thingSerial }
          await makeRequest('post', url, this.jwt, data)
        } catch (error) {
          console.log('Thing creation error')
          console.log(error.response)
          return null
        }
      } else {
        console.log('unknown error while getThing')
        console.log(error.response.status)
      }
    }

    return thingSerial
  }

  async saveScore (serial, data) {
    let url = `/pwa/v1/things/${serial}/collections/${this.getCategoryName()}`
    return makeRequest('post', url, this.jwt, data)
  }

  async deleteScore (serial, recordId) {
    let url = `/pwa/v1/things/${serial}/collections/${this.getCategoryName()}/records/${recordId}`
    return makeRequest('delete', url, this.jwt, {})
  }

  async getSortedScoreCollection (serial, eventName = null) {
    let url = `/pwa/v1/things/${serial}/collections/${this.getCategoryName()}`
    let response = await makeRequest('get', url, this.jwt, {})
    let data = response.data.payload.data
    if (eventName) {
      data = data.filter(el => el.eventname === eventName)
    }
    return data.sort((a, b) => b.score - a.score)
  }
}
