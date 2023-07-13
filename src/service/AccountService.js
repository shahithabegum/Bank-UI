import {BASE_API_URL} from '../config/index'
import axios from 'axios'

const getbyIDact=(email)=>{
    return axios.get(BASE_API_URL+`/getaccount?accountemail=${email}`)
}
export {
    getbyIDact
}