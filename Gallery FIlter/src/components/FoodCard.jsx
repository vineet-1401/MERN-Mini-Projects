import React from 'react'

const FoodCard = ({ FoodItems }) => {
    return (
        FoodItems.map((items) => {
            return (
                <div className="card">
                    <img src={items.imgurl} alt={items.foodname} />
                    <div className="foodname">{items.foodname}</div>
                    <div className="category">{items.category}</div>
                </div>
            )
        })
    )
}

export default FoodCard;