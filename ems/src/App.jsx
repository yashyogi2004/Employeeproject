import React, { useContext, useEffect, useState } from 'react';
import Login from "./Components/Auth/Login"
import EmployeeDashboard from "./Components/Dashboard/Employeedashboard"
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './Context/AuthProvider';
const App =()=>{
const [user, setUser] = useState(null);
const authData =useContext(AuthContext);
const [LoggedInUserData, setLoggedInUserData] = useState(null);

// useEffect(() => {
//   if(authData){
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     if(loggedInUser){
//       setUser(loggedInUser.role);
//     }
//   }
// }, [authData]);
useEffect(() => {
  const loggedInUser = localStorage.getItem("loggedInUser",'');
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser);
   setUser(userData.role);
   setLoggedInUserData(userData.data)
  }
}, []);

const handleLogin =(email,password)=>{
if(email=='admin@example.com'&& password=='admin123'){
  const admin = authData.admin.find((e)=>email==e.email && password==e.password);
 setUser('admin');
 setLoggedInUserData(admin);
 localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}));
}else if(authData  ){
  const employee =authData.employees.find((e)=>email==e.email && password==e.password)
  if(employee){

    setUser('employee'); 
    setLoggedInUserData(employee);
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
   }
  
} 
else{
  alert("invalid credential");
}   
}
 
  return (
    <>
    {!user? <Login handleLogin ={handleLogin}/>:''}
    {user=='admin'?  <AdminDashboard changeUser={setUser} data={LoggedInUserData}/>: (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={LoggedInUserData}/>:null)} 
    </>
  );
}
export default App;