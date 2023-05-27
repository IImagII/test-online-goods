import axios from 'axios'

import { getContentType } from '../utils/api.utils'

const API_URL = 'http://localhost:7000/api'

export const axiosClassic = axios.create({
  baseURL: API_URL,
  headers: getContentType()
})
