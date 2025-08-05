import type { validateResultLogin } from "../interface/login";
import { validateLogin } from "../utils/loginValidation";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 import { apiFetch } from "../utils/requestApi";
 import { APIURL} from "../utils/apiURL";
 const Login=()=>{
      const navigate = useNavigate();
    const [loginDetails,setLoginDetails]= useState({email:'',password:''})
   const handleLogin=async(e:React.FormEvent)=>{
    e.preventDefault();
      const validateResult:validateResultLogin=validateLogin(loginDetails);
      if(validateResult.valid){
        const response=await apiFetch(APIURL.LOGINURL,loginDetails,'POST');
        if(response){
            console.log(response,"response");
 navigate('/home/dashboard');
        }
        
      }else{
         alert(validateResult.message);
      }
    }
return (<div>
    <form onSubmit={handleLogin}>
<div className="flex">
 <label>Email</label>
 <input type="text" name="email" value={loginDetails.email} onChange={(e)=>setLoginDetails({...loginDetails,email:e.target.value})}/>
</div>
<div className="flex">
 <label>Password</label>
 <input type="text" name="password" value={loginDetails.password} onChange={(e)=>setLoginDetails({...loginDetails,password:e.target.value})}/>
</div>
<div>
    <input type="submit" name="submit" />
</div>
    </form>
</div>)
}
export default Login;