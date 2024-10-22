import React, { useState } from 'react'
import Menu from './Menu'
import FoodCard from './FoodCard'
import FilterButtons from './FilterButtons'
import { CgDarkMode } from "react-icons/cg";

const App = () => {
    const [FoodItem, setFoodITems] = useState(Menu);
    const [Mode, SetMode] = useState("DarkMode")

    function ToggleMode(){
        if(Mode === "DarkMode"){
            return SetMode("LightMode")
        }
        else{
            return SetMode("DarkMode")
        }
    }


    function filterMenu(category){
        if(category === "All"){
            return setFoodITems(Menu)
        }
       const food = Menu.filter(item=>{
        return item.category === category;
       })
       return setFoodITems(food);
    }

    const MenuItem = ["All", ...new Set(Menu.map((cat) => {
        return cat.category;
    })),];

    console.log("FoodCategory" + ` ${Mode}` )
    

    return (
        <>

        <div className={` ${Mode}`}>
            <nav><h1>{Mode}   <CgDarkMode onClick={ToggleMode} className='Icon'/></h1></nav>
            <div className="FoodCategory">
                {
                    MenuItem.map((item, index)=>{
                        return <FilterButtons key={index} category={item} filterMenu={filterMenu}/>
                    })
                }
            </div>

            <div className='FoodMenu'>
                <FoodCard FoodItems={FoodItem} />
            </div>
        </div>
        </>

    )

}

export default App;