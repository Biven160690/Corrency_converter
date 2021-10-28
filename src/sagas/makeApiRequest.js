import axios from 'axios'

export default function makeApiRequest (url) {
  return axios({
    method: 'get',
    url: url,
  })
}
