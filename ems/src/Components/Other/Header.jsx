import React from 'react';
import Login from '../Auth/Login';

 
const Header= (props)=>{

    const logoutHandler=()=>{
    localStorage.setItem('loggedInUser','');
    // window.location.reload();
    props.changeUser('');
    }
    return (
        <div className='flex items-end justify-between'>
     <h1 className='text-2xl'>Hello<br /><span className='text-3xl font-semibold '>{props.data.firstname} </span>✋</h1>
     <button onClick={logoutHandler} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-xl'>Log out</button>
     </div>
    );
}
export default Header;