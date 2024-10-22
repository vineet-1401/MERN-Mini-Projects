import React from "react";
import { Card } from 'flowbite-react';
import CarouselImage from "./CarouselImage";
import { CartState } from "../context/Context";

function EcomCard({ title, price, image }) {

    const {dispatch} = CartState();

    
    return (
        <Card
            className="max-w-60 p-3 Card flex-col"
        >
            <CarouselImage image={image} />
            {/* <img className="productImage" src={image} alt={image}/> */}
            <a href="#" className="no-underline">
                <h5 className=" text-gray-900 dark:text-white">
                    {title}
                </h5>
            </a>
            <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>

                <button
                    onClick={()=>{
                        dispatch({type:"ADD_TO_CART", payload:{title, price, image}})
                    }}
                    href="#"
                    className="rounded-lg border-none bg-cyan-700 px-2 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                    Add to cart
                </button>
            </div>
        </Card>
    );
}

export default EcomCard;