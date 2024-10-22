import React from 'react'

const Stats = ({expense, income}) => {
    return (
        <div className="stats flex gap-3 justify-center max-h-max">
            <div className='ExpenseUp my-auto mx-10 p-3 text-green-600'>
                <p className='max-w-lg text-center text-2xl font-semibold leading-loose'>Income</p>
                <h2 className='text-center text-4xl font-mono'>{income} Rs</h2>
            </div>
            <div className='ExpenseDown my-auto mx-10 p-3 text-red-600'>
                <p className='max-w-lg text-center text-2xl font-semibold leading-loose'>Expense</p>
                <h2 className='text-center text-4xl font-mono'>{expense} Rs</h2>
            </div>
        </div>

    )
}

export default Stats