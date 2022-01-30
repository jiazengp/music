import axios from 'axios'
import { getCookie } from '@/utils/auth'

const baseURL = import.meta.env.VITE_APP_NETEASE_API_URL

const service = axios.create({
  baseURL,
  withCredentials: true,
  timeout: 15000,
})

service.interceptors.request.use(function (config) {
  if (!config.params) config.params = {}
  if (baseURL[0] !== '/' && !false) {
    config.params.cookie = `MUSIC_U=${getCookie('MUSIC_U')};`
  }

  if (!false && !config.url.includes('/login')) {
    config.params.realIP = '211.161.244.70'
  }

  const proxy = JSON.parse(localStorage.getItem('settings')).proxyConfig
  if (['HTTP', 'HTTPS'].includes(proxy.protocol)) {
    config.params.proxy = `${proxy.protocol}://${proxy.server}:${proxy.port}`
  }

  return config
})

service.interceptors.response.use(
  (response) => {
    const res = response.data
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
