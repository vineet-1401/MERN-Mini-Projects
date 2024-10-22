import React from 'react'


const Transaction = ({ transactionList, removeTransaction }) => {
    return (
        <>
            <div className='px-5'>

                {
                    transactionList.map((item, index) => {
                        let color;
                        if (item.Etype === "expense") color = 'red-500';
                        if (item.Etype === "income") color = 'green-500';
                        return (
                            <div key={index}
                                className={`flex bg-white text-black border-l-8 border-${color} rounded-md px-3 py-2 w-full my-2`}>
                                <h3 className='w-5/6 h-1/2 p-2'>{item.name} <br/> <p className={`text-${color}`}>{item.amount} Rs</p> </h3> <button onClick={() => removeTransaction(index)} className='bg-red-400 text-white p-2 rounded-e-lg w-1/6 h-1/2'>Remove</button>
                            </div>
                        )

                    })
                }

            </div>
        </>
    )
}

export default Transaction