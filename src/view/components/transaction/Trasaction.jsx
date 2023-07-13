import React,{useEffect, useState} from 'react'
import {getbyTransactionData} from '../../../service/TransactionandStatementservice'
import { useNavigate } from "react-router-dom";
import {getbyIDact} from '../../../service/AccountService'
import {authservice} from '../../../service/AuthService'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './transaction.css'
const Trasaction = () => {
    const [transactiondata, setTransactiondata] = useState([])
    const userdata=authservice.getCurrentUser()
    let navigate = useNavigate()
    useEffect(() => {
        getaccountData()
    }, [])
    console.log("email",userdata.email)
    const getaccountData =()=>{
        getbyIDact(userdata.email).then((res)=>{
         getbyTransactionData(res.data.result.accountnumber).then((res)=>{
            setTransactiondata(res.data.result)
        })
      })
     }
     const handleCancel =()=>{
        navigate('/commonlayout/landingpage')
    }
    console.log("transactiondata",transactiondata)
  return (
    <div className='container p-0 m-0'>

    <div className="transhist-warraper my-4 mx-auto">
    <div className='trans-h2'>
                    <div className='mytitleflex mx-2' onClick={()=>handleCancel()}><KeyboardBackspaceIcon /></div>
                    <h2 className='text-center text-head   py-3'>Transaction History</h2>
                </div>
       
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className='translist my-4 mx-auto'>
       {
        transactiondata.map((item,index)=>(
            <ListItem  >
            <ListItemAvatar className='mx-2'>
              <Avatar>
                {item.reciptentname.charAt(0)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.reciptentname}
              
             secondary={new Date(item.date).toLocaleDateString() }
              className='mx-2'/>
            <ListItemText primary={item.amount}
            primaryTypographyProps={{
           
               color:item.transferedtype==="credited"  ? 'green' : 'red',
             }}
             secondary={item.transferedtype}
             
             secondaryTypographyProps={{
              color:item.transferedtype==="credited"  ? 'green' : 'red',
            }}
             className='mx-2'/> 
          </ListItem>
       
  
  
       
        ))
       }
  </List>
  </div>
  </div>
  )
}

export default Trasaction