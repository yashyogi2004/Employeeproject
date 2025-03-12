import React, { useState } from 'react';

const Login =({handleLogin})=>{
    
const [email, setemail] = useState("");
const [password,setpassword]=useState("");
    const SubmitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password);
        setemail("");
        setpassword("");
    }
    return(
        <div className='flex h-screen w-screen items-center justify-center'>
           <div className='border-2 border-emerald-600 px-30 py-30 rounded-xl'>
            <form onSubmit={(e)=>{
               SubmitHandler(e);
            }} className='flex flex-col items-center justify-center gap-5 '>
                <h1 className='text-3xl mb-10 text-amber-200'>Log in </h1>
            <input required value={email} onChange={(e)=>{
                setemail(e.target.value);
            }} type="email" placeholder='Enter your Email' className='border-2 border-emerald-600 rounded-full px-5 py-3 text-xl' />
            <input required value={password} onChange={(e)=>{
                setpassword(e.target.value);
            }} 
            type="password" placeholder='Enter Password' className='border-2 border-emerald-600 rounded-full px-5 py-3 text-xl'  />
              <button className='border-none border-emerald-600 rounded-full px-27 py-3 text-xl bg-emerald-400 hover:bg-emerald-600' >Log in</button>
            </form>
            </div> 
        </div>
    );
}
export default Login;
