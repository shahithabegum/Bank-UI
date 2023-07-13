import {BASE_API_URL} from '../config/index'
import axios from 'axios'

const tranfer=(id,data)=>{
    return axios.post(BASE_API_URL+`/transaction/${id}`,data)
}
const widraw=(id,data)=>{
    return axios.post(BASE_API_URL+`/withdraw/${id}`,data)
}
const deposite=(id,data)=>{
    return axios.post(BASE_API_URL+`/deposite/${id}`,data)
}
export {
    tranfer,widraw,deposite
}