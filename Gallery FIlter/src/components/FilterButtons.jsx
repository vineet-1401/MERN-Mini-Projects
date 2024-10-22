import React from 'react'


const FilterButtons = ({category, filterMenu}) => {
    return (
        <>
            <button  onClick={()=>filterMenu(category)}>{category.toUpperCase()}</button>
        </>
    )
}

export default FilterButtons;