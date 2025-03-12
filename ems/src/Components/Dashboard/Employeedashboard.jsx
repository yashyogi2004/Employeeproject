import React from 'react';
import Header from '../Other/Header';
import TaskListNumbers from '../Other/TaskListNumber';
import TaskList from '../Tasklist/Tasklist';
const Employeedashboard=(props)=>{
    return(
            <div className='p-10 bg-[#1C1C1C] h-screen'>
             
                <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumbers data={props.data}/>
            <TaskList data={props.data}/>
            </div>
    )
}
export default Employeedashboard;