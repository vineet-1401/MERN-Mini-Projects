import React from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useState } from 'react';

const FilterMenu = () => {

  const [sortPrice, setSortPrice] = useState(-1);
  const [includeOutofStock, setIncludeOutOfStock] = useState(0);


  return (
    <div className='FilterMenu w-1/5'>
      <span>
        <h3 className='m-2'>Filter Products</h3>
        <span className='m-2'>
          <Form.Check
            inline
            label="Price low to high"
            name="group1"
            type="radio"
            id={'inline-1'}
            checked={sortPrice === 0}
            onChange={() => setSortPrice(0)}
          />
        </span>
        <span className='m-2'>
          <Form.Check
            inline
            label="Price high to low"
            name="group1"
            type="radio"
            id={'inline-2'}
            checked={sortPrice === 1}
            onChange={() => setSortPrice(1)}
          />
        </span>
        <span className='m-2'>
          <Form.Check
            label="Include Out of Stock"
            type='checkbox'
            checked={includeOutofStock === 1}
            onChange={() => setIncludeOutOfStock(includeOutofStock === 1 ? 0 : 1)}
          />
        </span>
        <Button onClick={() => {
          setIncludeOutOfStock(0);
          setSortPrice(-1);
        }} className='m-2 w-full' variant="light">Clear Filter</Button>

      </span>



    </div>
  )
}

export default FilterMenu;
