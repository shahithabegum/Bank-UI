import {BASE_API_URL} from '../config/index'
import axios from 'axios'

const getbyIDcust=(email)=>{
    return axios.get(BASE_API_URL+`/getbyId?email=${email}`)
}
const updateCustomer =(data)=>{
    return axios.put(BASE_API_URL+`/updatecustomer`,data)
}
const upload = (data)=>{
    return axios.post(BASE_API_URL+`/upload`,data)
}
export {
    getbyIDcust,updateCustomer,upload
}