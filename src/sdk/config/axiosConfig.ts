// import { BASE_URL } from "../api-root"
import axios, { AxiosRequestConfig } from "axios"
import { BASE_URL } from "../routes"
import { getToken } from "../utility"

export const getAxiosConfig = (override?: AxiosRequestConfig) => {
    let obj = {
        baseURL: BASE_URL,
        timeout: 10000,
        ...override,
    }
    const token = getToken()
    if (token) { 
        obj = {
            headers: {
                Authorization: `Report-Client-Token ${token}`,
            },
            ...obj,
        }
    }
    return axios.create(obj)
}