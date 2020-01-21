import {
  get,
  post,
  // put,
  // destroy
} from "./apiClient"

export const UserAPI = {
  login: params =>
    post(`/login`, params),
  single: id =>
    get(`/user/${id}`)
}

export const CarnetAPI = {
  all: () => 
    get(`/carnets`),
  userCarnets: (userId) =>
    get(`/user_carnets/${userId}`)
}

export const ClassAPI = {
  all: () => 
    get(`/classes`)
}
