import {BASE_API_URL} from '../config/index'
import axios from 'axios'

const getbystatementData=(accountholder,fromdate,todate)=>{
    return axios.get(BASE_API_URL+`/getstatements?accountholder=${accountholder}&from=${fromdate}&to=${todate}`)
}
export{
    getbystatementData
}