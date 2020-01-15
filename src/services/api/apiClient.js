import axios from "axios"

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

// INFO: delete is reserved word which cannot be destructure and use further
const { get, post, put, delete: destroy, patch } = apiClient

export { get, post, put, destroy, patch }
