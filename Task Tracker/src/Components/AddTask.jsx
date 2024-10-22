import React, { useEffect, useState } from 'react'


const AddTask = ({ taskList }) => {
    const [addModal, setAddModal] = useState(false);
    const [taskDetail, setTaskDetail] = useState({ name: "", description: "", timeStamp:"", duration:0});
    const [errorMessage, setErrorMessage] = useState(false);

    function updateTaskDetail(event) {
        const { name, value } = event.target;
        if (name === "project-name") {
            setTaskDetail((prev) => {
                return { ...prev, name: value }
            })
        } else if (name === "task-description") {
            setTaskDetail((prev) => {
                return { ...prev, description: value }
            })
        }
    }

    function addTask(event) {
        event.preventDefault();
        
        if (taskDetail.name === "" || taskDetail.description === "") {
            return setErrorMessage(true);
        }else{
            let timeStamp = new Date();
            let tempList= taskList;
            tempList.push({
                name:taskDetail.name, description:taskDetail.description,  timestamp:timeStamp, duration:0
                
            })
            localStorage.setItem("taskList", JSON.stringify(tempList));
            window.location.reload();
            // setTaskList(() =>
            //     {return [...taskList, taskDetail];}
            // )
        }
        
        setAddModal(false);
        setTaskDetail({ name: "", description: "" , timestamp:timestamp, duration:0})
        setErrorMessage(false);
    }
    return (
        <>
            <button onClick={() => setAddModal(true)} className='bg-blue-500 text-white uppercase text-sm font-semibold p-2 rounded-xl hover:opacity-70'>
                + New
            </button>
            {addModal ? (
                <>
                    <div className='flex items-center flex-row justify-center overflow-x-hidden overflow-y-auto fixed inset-0 m-auto z-100'>
                        <div className='w-3/4 max-w-lg bg-white justify-center items-center flex-row'>
                            <div className='flex flex-row py-3 px-4  bg-white justify-between '>
                                <h3 className='text-2xl font-semibold'>Add New Task</h3>
                                <button className='px-1 text-black float-right text-3xl leading-none font-semibold block' onClick={() => setAddModal(false)}>
                                    X
                                </button>
                            </div>
                            <hr className='border-black'></hr>
                            <form className='py-3 px-4'>
                                <div>
                                    <label htmlFor='project-name' className='uppercase italic text-xs block my-2'>Project Name</label>
                                    <input onChange={updateTaskDetail} value={taskDetail.name} name="project-name" id='project-name' type='text' placeholder='Project Name' className='w-full bg-gray-300 border-black rounded-md py-3 px-4 leading-tight outline outline-1 outline-black  focus:bg-white' />
                                </div>
                                <div>
                                    <label htmlFor='task-description' className='uppercase italic text-xs block my-2'>Task Description</label>
                                    <textarea onChange={updateTaskDetail} value={taskDetail.description} name="task-description" id='task-description' type='text' placeholder='Project Description' rows="3" className='w-full bg-gray-300 border-black rounded-md py-3 px-4 leading-tight outline outline-1 outline-black  focus:bg-white' />
                                </div>
                            </form>
                            {errorMessage && <h2 className='text-red-500 m-2 text-center'>All Fields are Mandatory</h2>}
                            <hr className='border-black'></hr>                            <div className='flex justify-center'>
                                <button className='p-2 m-3 text-black bg-blue-400 rounded-md w-1/4 hover:bg-green-300 text-1xl font-semibold block' onClick={addTask}>Add Task</button>
                            </div>
                        </div>
                
                    </div>
                </>
            ) :
                null}

        </>
    )
}

export default AddTask;