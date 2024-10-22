import React, { useEffect, useState } from 'react'

const EditTask = ({ setTaskList, taskList, item }) => {
    const [updateModal, setupdateModal] = useState(false);
    const [taskDetail, setTaskDetail] = useState({});
    const [errorMessage, setErrorMessage] = useState(false);

    useEffect(() => {
        const index = taskList.indexOf(item);
        setTaskDetail({ duration:item.duration ,name: taskList[index].name, description: taskList[index].description });
    }, [item])

    function updateTaskDetail(event) {
        const { name, value } = event.target;
        if (name === "project-name") {
            setTaskDetail((prev) => {
                return { ...prev, name: value, duration:item.duration }
            })
        } else if (name === "task-description") {
            setTaskDetail((prev) => {
                return { ...prev, description: value }
            })
        }
    }


    function EditTask(event) {
        event.preventDefault();

        if (taskDetail.name === "" || taskDetail.description === "") {
            return setErrorMessage(true);
        }
            const index = taskList.indexOf(item);
            taskList.splice(index, 1, {...taskDetail, duration:item.duration})
            localStorage.setItem("taskList", JSON.stringify(taskList));
            window.location.reload(); 
            // setTaskList((prev) => {
            //     return [...prev]
            // });
            setupdateModal(false);
            setErrorMessage(false);
        }
        return (
            <>
                <button onClick={() => setupdateModal(true)} className='bg-gray-500 text-white uppercase text-sm font-semibold p-2 rounded-xl hover:opacity-70'>
                    Edit
                </button>
                {updateModal ? (
                    <>
                        <div className='flex items-center flex-row justify-center overflow-x-hidden overflow-y-auto fixed inset-0 m-auto z-100'>
                            <div className='w-3/4 max-w-lg bg-white justify-center items-center flex-row'>
                                <div className='flex flex-row py-3 px-4  bg-white justify-between '>
                                    <h3 className='text-2xl font-semibold'>Edit Task</h3>
                                    <button className='px-1 text-black float-right text-3xl leading-none font-semibold block' onClick={() => setupdateModal(false)}>
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
                                <hr className='border-black'></hr>
                                <div className='flex justify-center'>
                                    <button className='p-2 m-3 text-black bg-blue-400 rounded-md w-1/4 hover:bg-green-300 text-1xl font-semibold block' onClick={EditTask}>Update Task</button>;

                                </div>
                            </div>

                        </div>
                    </>
                ) :
                    null}

            </>
        )
    }

    export default EditTask;