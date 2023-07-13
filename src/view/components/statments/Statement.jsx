import React, { useEffect, useState, useRef } from "react";
import { getbyIDact } from "../../../service/AccountService";
import { getbystatementData } from "../../../service/Statementservice";
import { authservice } from "../../../service/AuthService";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useFormik } from "formik";
import { SmallInput } from "../../../shared/SmallInput";
import { useReactToPrint } from "react-to-print";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import "./statment.css";
import SValidation from "./SValidation";
const Statement = () => {
  let navigate = useNavigate();
  const [accountdata, setAccountdata] = useState([]);
  const [statement, setStatement] = useState([]);
  const [show, setShow] = useState(false);
  const componentPDF=useRef();
  useEffect(() => {
    getaccountData();
  }, []);
  const formik = useFormik({
    initialValues: {
      from: "",
      to: "",
    },
    validationSchema:SValidation,
    onSubmit:values=>{
      console.log(values)
      handleSubmit(values)
  }
  });
  
  const email = authservice.getCurrentUser();
  console.log(email.email);
  const getaccountData = () => {
    getbyIDact(email.email).then((res) => {
      setAccountdata(res.data.result);
    });
  };

  const handleSubmit = () => {
    const fromdate = new Date(formik.values.from).toISOString();
    const todate = new Date(formik.values.to).toISOString();

    getbystatementData(accountdata.accountnumber, fromdate, todate).then(
      (response) => {
        setStatement(response.data.result);
        setShow(true)
      }
    );
  };
  const pdf=useReactToPrint({
    content:()=> componentPDF.current,
      
      onafterprint:()=>alert("data saved")
  })
  const handleCancel = () => {
    navigate("/commonlayout/landingpage");
  };
  console.log(accountdata);
  console.log(statement);
  return (
    <div className=" p-0 mx-auto">
      <div className="statement  mx-auto">
        <div className="trans-h2 mx-auto">
          <div className="mytitleflex mx-2" onClick={() => handleCancel()}>
            <KeyboardBackspaceIcon />
          </div>
          <h2 className="text-center text-head py-3">Generate Statements</h2>
        </div>
       
           <form onSubmit={formik.handleSubmit} className='mx-auto my-5 py-5' id='formik-from'>
            <Row className="my-3 mx-1">
              <Col m={12} sm={12} lg={6}>
                <SmallInput
                  name="from"
                  id="from"
                  lable="from :"
                  span="*"
                  type="date"
                  placeholder="From"
                  isTouched={formik.touched.from}
                  error={formik.errors.from}
                  {...formik.getFieldProps("from")}
                />
              </Col>
              <Col m={12} sm={12} lg={6} >
                <SmallInput
                  name="to"
                  id="to"
                  lable="to :"
                  span="*"
                  type="date"
                  placeholder="To"
                  isTouched={formik.touched.to}
                  error={formik.errors.to}
                  {...formik.getFieldProps("to")}
                />
              </Col>
            </Row>
              <Row className="my-3 mx-1 justify-content-center">
              <Col lg={9} md={9} sm={9} ml={0}>
                <button
                  className="btn btn-outline-info w-100"
                  type="submit"
                >
                  Generate
                </button>
              </Col>
            </Row> 
          </form>
          {
            show ?   
            <div className="container mx-auto " >
            <button className="btn btn-success mx-2 my-2" onClick={pdf} ><FileDownloadIcon /></button>
            <div className="table-responsive tablediv">
            <table class="table table-striped " ref={componentPDF }>
          <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Recipitent Details</th>
      <th scope="col">Reference No</th>
      <th scope="col">Amount</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
   {statement.map((item,index)=>(<tr key={index}>
     <td>{item.date}</td>
     <td>{item.reciptentname},{item.reciptent}<br />{item.ifsccode}</td>
     <td>{item.refno}</td>
     <td>{item.amount}</td>
     <td>{item.transferedtype}</td>
   </tr>))}
    </tbody>
</table>
       
            </div>
         
          </div> :
          null
          }
       
         
      </div>
    </div>
  );
};

export default Statement;
