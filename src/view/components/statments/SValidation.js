import * as yup from 'yup'
const SValidation = yup.object().shape({
    from:yup.date().required("From Date is required"),
    to:yup.date().required("To Date is required")
})
export default SValidation;