import Account from "../view/components/account/Account";
import AmountTransaction from "../view/components/amounttrasactio/AmountTransaction";
import Deposite from "../view/components/amounttrasactio/Deposite";
import WidrawAmount from "../view/components/amounttrasactio/WidrawAmount";
import ApplyLoan from "../view/components/extras/ApplyLoan";
import CreditCard from "../view/components/extras/CreditCard";
import FD from "../view/components/extras/FD";
import Landingpage from "../view/components/landingpage/Landingpage";
import Login from "../view/components/login/Login";
import Editprofile from "../view/components/myprofile/Editprofile";
import Myprofile from "../view/components/myprofile/Myprofile";
import PageNotFound from "../view/components/PageNotFound";
import Changepassword from "../view/components/password/Changepassword";
import ForgetPassword from "../view/components/password/ForgetPassword";
import OtpValidation from "../view/components/password/OtpValidation";
import Resetpassword from "../view/components/password/Resetpassword";
import Statement from "../view/components/statments/Statement";
import Trasaction from "../view/components/transaction/Trasaction";
import User from "../view/components/userregister/User";
import CommonLayout from "../view/layout/CommonLayout";

export const pathroute=[
    {
      path:'/',
      DynComponent:Login
    },{
      path:'/forgetpassword',

      DynComponent:ForgetPassword
    },
    {
      path:'/resetpassword',
      DynComponent:Resetpassword
    },
    {
      path:'/otp',
      DynComponent:OtpValidation
    },
    {
    path:'/commonlayout',
    DynComponent:CommonLayout,
    isExact:false,
    childroutes:[
      {
        path:"/commonlayout/landingpage",
        DynComponent:Landingpage
      },
          
          {
            path:"/commonlayout/myprofile",
            DynComponent:Myprofile
          },
          {
            path:"/commonlayout/editprofile",
            DynComponent:Editprofile
          },
          {
            path:"/commonlayout/adduser",
            DynComponent:User
          },
          {
            path:"/commonlayout/changepassword",
            DynComponent:Changepassword
          },{
            path:"/commonlayout/account",
            DynComponent:Account
          }
          ,{
            path:"/commonlayout/transactionhistory",
            DynComponent:Trasaction
          }
          ,{
            path:"/commonlayout/statements",
            DynComponent:Statement
          }
          ,{
            path:"/commonlayout/transefer",
            DynComponent:AmountTransaction
          }
          ,{
            path:"/commonlayout/widraw",
            DynComponent:WidrawAmount
          }
          ,{
            path:"/commonlayout/deposit",
            DynComponent:Deposite
          }
          ,{
            path:"/commonlayout/creditcard",
            DynComponent:CreditCard
          }
          ,{
            path:"/commonlayout/loan",
            DynComponent:ApplyLoan
          }
          ,{
            path:"/commonlayout/fd",
            DynComponent:FD
          }
    ]
},
{
    path:'*',
    isExact:false,
    DynComponent:PageNotFound
}]