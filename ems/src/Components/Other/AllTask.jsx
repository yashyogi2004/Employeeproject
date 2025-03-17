import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
 
const AllTask =()=>{
   const [userData, setUserData] = useContext(AuthContext);

   return(
         <div className='bg-[#1c1c1c1c] p-5 w-full mt-5 rounded h-60 '>
                <div className='bg-red-400  mb-2 py-2 px-4 flex justify-between rounded w-full'>
      <h2 className='w-1/5 bg-red-500' >Employee Name </h2>
      <h3 className='w-1/5 bg-red-500'>New Task</h3>
      <h5 className='w-1/5 bg-red-500'>Active Task</h5>
      <h5 className='w-1/5 bg-red-500'>Completed</h5>
      <h5 className='w-1/5 bg-red-500'>Failed</h5>
   </div>
             <div className='h-[80%] overflow-auto'>
             {userData.employees.map((elem,)=>{
      return(
      <div className='border-violet-50 border-2  mb-2 py-2 px-4 flex justify-between rounded w-full'>
      <h2 className='w-1/5 text-red-500' >{elem.name} </h2>
      <h3 className='w-1/5 text-blue-500'>{elem.task_numbers.new_task}</h3>
      <h5 className='w-1/5 text-amber-500' >{elem.task_numbers.active}</h5>
      <h5 className='w-1/5 text-green-500' > {elem.task_numbers.completed}</h5>
      <h5 className='w-1/5 text-amber-100'>{elem.task_numbers.failed}</h5>
   </div>
      )
   })} 
             </div>
         </div>
    )
}
export default AllTask;