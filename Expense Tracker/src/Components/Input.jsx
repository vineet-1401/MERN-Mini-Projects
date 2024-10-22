import React, { useState } from 'react'

const Input = ({ addTransaction }) => {
  const [expense, setExpense] = useState({ Etype: "expense", amount: "", name: "" });

  function updateExpense(event) {
    const { type, value } = event.target;
    if (type === "radio") {
      setExpense(prev => {
        return { ...prev, Etype: value };
      })
    }
    if (type === "text") {
      setExpense(prev => {
        return { ...prev, name: value }
      })
    }
    if (type === "number") {
      setExpense(prev => {
        return { ...prev, amount: Number(value) }
      })
    }
  }

  function addToList(event) {
    event.preventDefault();
    setExpense(prev => {
      return { ...prev, amount: "", name: "" } 
    })
    return addTransaction(expense);
  }

  return (
    <div className='px-3'>
      <label className='italic text-xl'>Select Expense Type</label> <br />
      <div className="grid grid-cols-2 gap-2 rounded-sm bg-gray-200 m-2">
        <div>
          <input type="radio" onChange={updateExpense} name="option" id="1" value="expense" className="peer hidden" defaultChecked />
          <label htmlFor="1" className="block cursor-pointer rounded-sm text-center p-1 peer-checked:bg-red-500 peer-checked:font-bold peer-checked:text-white">Expense</label>
        </div>

        <div>
          <input type="radio" onChange={updateExpense} name="option" id="2" value='income' className="peer hidden" />
          <label htmlFor="2" className="block cursor-pointer rounded-sm text-center p-1 peer-checked:bg-green-500 peer-checked:font-bold peer-checked:text-white">Income</label>
        </div>
      </div>
      <div className='flex flex-wrap'>
        <input value={expense.name} onChange={updateExpense} className='h-10 w-8/12 mx-2 mt-3 p-2 outline outline-1' type="text" placeholder='Add your Expense Type' />
        <input value={expense.amount} onChange={updateExpense} className='h-10 w-3/12 mx-2 mt-3 p-2 outline outline-1' type="number" placeholder='Expense Amount' />
        <button className='bg-black h-11 text-white font-bold rounded-lg p-2 w-1/6 mx-auto my-3' onClick={addToList} >ADD</button>
      </div>
    </div>

  )
}

export default Input