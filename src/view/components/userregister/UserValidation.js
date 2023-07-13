import * as yup from 'yup'
const UserValidation = yup.object().shape({
    email:yup.string().email().required("email is required"),
    phoneno:yup.string().max(10,"max lenth 10").required("Password is required"),
    username:yup.string().required("Username is required"),
    role:yup.string().required("Role is required"),

})
export default UserValidation;