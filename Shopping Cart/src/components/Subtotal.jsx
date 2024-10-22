import React from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from 'react';

const Subtotal = () => {

  const [subTotal, setSubTotal] = useState(0);
//   const [includeOutofStock, setIncludeOutOfStock] = useState(0);


  return (
    <div className='FilterMenu w-1/4 h-screen'>
      <span>
        <h3 className='m-2'>Subtotal</h3>
        <span className='m-2'>
        <h4>$ {subTotal}</h4>
        </span>
        <Button onClick={() => {
        }} className='m-2 w-full' variant="success">Check Out</Button>

      </span>



    </div>
  )
}

export default Subtotal;
