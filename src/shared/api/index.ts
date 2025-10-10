import axios from 'axios'
import { toast } from 'sonner'
import panel from './panel'
import payment from './payment'
import mailing from './mailing'

export const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://spy-q.net/api'
})

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      const { status, data } = error.response
      toast(`${status}, ${data.message}`)
    }
    return Promise.reject(error)
  }
)

export default {
  panel,
  payment,
  mailing
}
