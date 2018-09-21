import url from 'url'
import { signUrl } from '../vendor/lumavate'
import axios from 'axios'

export const makeRequest = async (method, requestUrl, jwtToken, body = {}) => {
  const baseUrl = process.env.BASE_URL
  const fullUrl = url.resolve(baseUrl, requestUrl)
  const req = {
    body: body,
    method: method,
    path: fullUrl
  }

  const signedUrl = await signUrl(req)
  const headers = {
    'Authorization': `Bearer ${jwtToken}`,
    'Content-Type': 'application/json'
  }

  return axios({
    method: method,
    url: signedUrl,
    data: body,
    headers: headers
  })
}
