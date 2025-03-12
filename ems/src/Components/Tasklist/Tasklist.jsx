import React from 'react';
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompletedTask from "./CompleteTask";
const TaskList =({data})=>{
  console.log(data.tasks[2].new_task);
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 py-5 w-full mt-10 flex -nowrap'>
          {data.tasks.map((elem,idx)=>{
            if(elem.active){
               return (
               <AcceptTask key={idx} data={elem}/>
              )
            }
            if(elem.new_task){
              return(
                <NewTask key={idx} data={elem}/>
               ) 
            }
            if(elem.failed){
              return(
                <FailedTask key={idx} data={elem}/>
              )
            }
            if(elem.completed){
              return (
                <CompletedTask key={idx} data={elem}/>
              )
            }
          })}
        </div>
    );
}
export default TaskList;