import React from 'react'

const Balance = ({balance}) => {
  return (
      <div className='Balance grid place-content-center my-5'>
        <p className='text-2xl font-bold text-center'>Balance: <span className="text-3xl italic underline"> Rs {balance}</span> </p>
      </div>
  )
}

export default Balance