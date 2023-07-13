import {BASE_API_URL} from '../config/index'
import axios from 'axios'
const register =(data)=>{
    return  axios.post(BASE_API_URL+"/register",data)
}
const login= (data)=>{
    return  axios.post(BASE_API_URL+"/login",data)
}
const otp =  (data)=>{
    return  axios.post(BASE_API_URL+"/otpVerfication",data)
}
const forget_Password=  (data)=>{
    return  axios.post(BASE_API_URL+"/forgotpassword",data)
}
const change_Password=  (data)=>{
    return  axios.post(BASE_API_URL+"/changepassword",data)
}
const reset_password =  (data)=>{
    return  axios.post(BASE_API_URL+"/resetpassword",data)
}
export {
    login,otp,change_Password,reset_password,register,forget_Password
}