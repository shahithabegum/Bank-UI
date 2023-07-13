import {BASE_API_URL} from '../config/index'
import axios from 'axios'

const getbyTransactionData=(accountholder)=>{
    return axios.get(BASE_API_URL+`/gethistory?accountholder=${accountholder}`)
}
export{
    getbyTransactionData
}