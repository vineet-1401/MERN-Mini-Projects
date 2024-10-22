import React, { useEffect, useState } from 'react'
import EditTask from "./EditTask.jsx"

const TaskCard = ({ item, taskList, setTaskList }) => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let TimeInterval;
        if (running === false) {
            clearInterval(TimeInterval);
        }
        else {
            ;
            TimeInterval = setInterval(() => {
                setTime(prev => {
                    return prev + 10;
                })
            }, 10);
        }
        return () => clearInterval(TimeInterval);
    }, [running]);


    function deleteTask(item) {
        let taskIndex = taskList.indexOf(item);
        taskList.splice(taskIndex, 1)
        setTaskList(prev=>{
            return ([...prev])
        });
    }

    function handleTimeout() {
        let taskIndex = taskList.indexOf(item);
        taskList.splice(taskIndex, 1, {
            ...item, duration: time
        })
        localStorage.setItem('taskList', JSON.stringify(taskList));
        window.location.reload();
    }

    return (
        <>
            <div className='bg-white lg:w-1/2 m-4 flex flex-col p-2 rounded-2xl'>
                <div className='flex justify-between items-center p-2'>
                    <h1 className="text-xl p-1 w-3/4 font-semibold ">{item.name}</h1>
                    <EditTask item={item} taskList={taskList} setTaskList={setTaskList} />
                </div>
                <div className=' p-2'>
                    <h1 className="p-1 block "> {item.description}</h1>
                </div>
                <div className='flex justify-evenly '>
                    <div className='p-2'>
                        <span className='p-1 font-semibold italic'>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)} :</span>
                        <span className='p-1 font-semibold italic'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)} :</span>
                        <span className='p-1 font-semibold italic'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} :</span>
                        <span className='p-1 font-semibold italic'>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
                    </div>
                    <div className='p-2 flex gap-3'>
                        {running ?
                            (<div>
                                <button className='p-1 text-sm bg-white outline outline-1 rounded-lg' onClick={() => { setRunning(false); handleTimeout() }}>Stop</button>
                            </div>)
                            :
                            (<div>
                                <button className='p-1 text-sm bg-white outline outline-1 rounded-lg' onClick={() => { setRunning(true);handleTimeout()}}>Start</button>
                            </div>)
                        }
                    <button className='p-1 text-sm bg-white outline outline-1 rounded-lg' onClick={() => {
                        setRunning(false); setTime(0);
                    }}>Reset</button>
                </div>
            </div>
            <button onClick={deleteTask} className='block mx-auto w-45 p-1 rounded-md bg-red-400 my-1'>Delete</button>
        </div >
        </>
    )
}

export default TaskCard