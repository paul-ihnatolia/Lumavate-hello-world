import url from 'url'
import { signUrl } from '../vendor/lumavate'
import axios from 'axios'

export const makeRequest = async (method, requestUrl, jwtToken, body = {}) => {
  const baseUrl = process.env.BASE_URL
  const req = {
    body: body,
    method: method,
    path: requestUrl
  }

  const signedUrl = await signUrl(req)
  const fullUrl = url.resolve(baseUrl, signedUrl)
  const headers = {
    'Authorization': `Bearer ${jwtToken}`,
    'Content-Type': 'application/json'
  }

  return axios({
    method: method,
    url: fullUrl,
    data: body,
    headers: headers
  })
}
