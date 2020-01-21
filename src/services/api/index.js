import {
  get
  // post,
  // put,
  // destroy
} from "./apiClient"

export const UserAPI = {
  login: params =>
    get(`/login`, params),
  single: id =>
    get(`/users/${id}`)
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
