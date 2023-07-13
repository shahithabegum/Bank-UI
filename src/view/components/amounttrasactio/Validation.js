import * as yup from 'yup'
const Validation = yup.object().shape({
    ifsccode:yup.string().required("IFSC Code is required"),
    amount:yup.number().required("Amount is required"),
    reciptentname:yup.string().required("Recipitent Name is required"),
    reciptent:yup.string().required("Account Number is required"),

})
export default Validation;