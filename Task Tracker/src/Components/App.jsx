import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import TaskCard from './TaskCard';
import uniqid from 'uniqid';



const App = () => {
  const [taskList, setTaskList] = useState([]);
  useEffect(()=>{
    let array = localStorage.getItem('taskList');
    if(array){
      setTaskList(JSON.parse(array));
    }
  }
  , [])
  return (
    <>
      <h1 className='text-2xl font-bold py-4 pl-6'>The Task Tracker</h1>
      <p className='text-xl pl-6'>Hi there</p>
      <div className='flex flex-row gap-3 items-center'>
        <p className='text-xl pl-6'>Click </p> <AddTask setTaskList={setTaskList} taskList={taskList} /> <p> to add a new task</p>
      </div>
      <h2 className='ml-6 p-2 my-4 text-2xl w-1/4 bg-gray-300'>To do:</h2>
      {taskList.map((item) => {
        return <TaskCard key={uniqid()} item={item} taskList={taskList} setTaskList={setTaskList} />;
      })}
    </>
  )
}

export default App