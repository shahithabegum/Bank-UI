import React ,{ useEffect, useState }from 'react'
import {getbyIDact} from '../../../service/AccountService'
import {authservice} from '../../../service/AuthService'
import { useNavigate } from "react-router-dom";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const Account = () => {
    let navigate = useNavigate()
    const [accountdata, setAccountdata] = useState([])
    useEffect(() => {
      getaccountData()
    }, [])
      const email=authservice.getCurrentUser()
      console.log(email.email)
     const getaccountData =()=>{
        getbyIDact(email.email).then((res)=>{
         setAccountdata(res.data.result)
      })
     }
     const handleCancel =()=>{
        navigate('/commonlayout/landingpage')
    }
    console.log("account",accountdata)
  return (
    <div>
        <div className="myprofile container p-0 ">
            <div className='mytitle'>
                <div className=' mx-2 py-1'>
                    <div className='mytitleflex' onClick={()=>handleCancel()}><KeyboardBackspaceIcon /></div>
                </div>
            <h2 className=" text-center py-4 text-head">ACCOUNT DETAILS</h2>
            <div className=" text-center m-0">
                <AccountBalanceIcon className='profile-icon'/>
            </div>
            </div>
       
        <div className="details  mx-auto w-100 my-4">
            <div className='personal-deatails container my-3'>
                <h5 className='text-center'>ACCOUNT INFO</h5>
                    <h6 className=''>{accountdata.accountnumber}</h6>
                    <p className='mt-1' >Account Number</p>
                    <h6 className=''>{accountdata.accounttype}</h6>
                    <p className='mt-1' >Account Type</p>
                    <h6 className=''>{accountdata.custid}</h6>
                    <p className='mt-1' >Customer I'D</p>
                    <h6 className=''>{accountdata.ifsccode}
                    </h6>
                    <p className='mt-1' >IFSC Code</p>
                    <h6 className=''>{accountdata.branchname}
                    </h6>
                    <p className='mt-1' >Branch Name</p>
            </div>
            <div className='personal-deatails container my-3'>
            <h5 className='text-center'>Balance Details</h5>
                    <h6 className=''>{accountdata.balance}</h6>
                    <p className='mt-1' >Account Balance</p>
                    <h6 className=''>{accountdata.minimumbalance}</h6>
                    <p className='mt-1' >Minimum Balance</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Account