import * as yup from 'yup'
const Passwordvalidation = yup.object().shape({
    email:yup.string().required("email is required"),
    password:yup.string().required("Password is required"),
    oldpassword:yup.string().required("Old Password is required"),
    confirmpassword:yup.string().required("Confirm Password is required").oneOf([yup.ref('password')],'Password must match'),
  
})
export default Passwordvalidation;