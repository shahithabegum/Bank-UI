import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import KeyIcon from '@mui/icons-material/Key';
import CachedIcon from '@mui/icons-material/Cached';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export const SidenavAdmin=[
    {
        path:'myprofile',
        title:"My Profile",
        icon:<AccountCircleIcon />
    },
    {
        path:'account',
        title:"Account Details",
        icon:<AccountBalanceIcon />
    },
    {
        path:'changepassword',
        title:"Change Password",
        icon:<KeyIcon />
    },
    {
        path:'transactionhistory',
        title:"Transaction History",
        icon:<CachedIcon />
    },
    {
        path:'statements',
        title:"Statements",
        icon:<ReceiptLongIcon />
    },
    
    { 
        path:'adduser',
        title:"User registration",
        icon:<GroupAddIcon />
    }

]