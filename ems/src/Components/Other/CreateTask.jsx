import React from 'react';
import  { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
const CreateTask =()=>{
     const [userData, setUserData] = useContext(AuthContext);
    const [taskTitle, setTaskTitle] = useState('');
    const [Taskdesc, setTaskdesc] = useState('');
    const [TaskDate, setTaskDate] = useState('');
    const [assignTo, setassignTo] = useState('');
    const [category, setcategory] = useState('');
    const [newtask, setNewTask] = useState({});
    const submitHandler=(e)=>{
        e.preventDefault();
        setNewTask({title:taskTitle,description:Taskdesc,date:TaskDate,category:category,active:false,new_task:true,failed:false,completed:false});
         const data=userData.employees;
         data.forEach(function(elem){
           if(elem.name==assignTo){
            elem.tasks.push(newtask);
            elem.task_numbers.new_task=elem.task_numbers.new_task+1;
           }
         });
      setUserData({employees:data});
      localStorage.setItem('employees',JSON.stringify(data));
      
         setTaskTitle('');
         setTaskdesc('');
         setTaskDate('');
         setassignTo('');
         setcategory('');
         
    }
    return (
        <div>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex items-start flex-wrap justify-between w-full ' >
            <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}}
            type="text" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-500' placeholder='Make a ui design' />
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input value={TaskDate} onChange={(e)=>{setTaskDate(e.target.value)}}
            type="date" name="" id="" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-500' />
            </div>
           <div>
           <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
           <input value={assignTo} onChange={(e)=>{setassignTo(e.target.value)}}
           type="text" placeholder='Employee Name' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-500' />
           </div>
           <div>
           <h3 className='text-sm text-gray-300 mb-0.5'>Catagory</h3>
           <input value={category} onChange={(e)=>{setcategory(e.target.value)}}
           type="text" placeholder='Design,dev,etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]  border-gray-500' />
           </div>
            </div>
            <div className='w-1/2'>
            <h3  className='text-sm text-gray-300 mb-0.5'>Discription</h3>
            <textarea value={Taskdesc} onChange={(e)=>{setTaskdesc(e.target.value)}}
             name='' id='' cols="30" rows="10" className='w-full text-sm h-44 rounded outline-none bg-transparent border-2 border-gray-500'></textarea>
            <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded text-sm mt-4 w-full'>Create task</button>
            </div>

        </form>
       </div>
    );
} 
export default CreateTask;