import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'



function MyCart() {
    const { cart } = useContext(CartContext)
    const [count,setCount] = useState(1)
    function handlePlaceOrder() {
        alert("Your Order placed successfully");
    }
    function handleDecrease(){
        if(count>1){
            setCount(count-1);
        }
    }
    function handleIncrease(){
        if(count<10)
        {
            setCount(count+1);
        }
    }
    return (
        <div>
            {
                cart.length > 0 ?
                    cart.map((p) => {
                        return (

                            <div className='flex justify-center m-6'>
                                <div className='border-2 h-50 w-90 rounded-lg flex justify-center items-center relative'>
                                    <img src={p.image} className=' h-30 m-1.5 rounded-lg' ></img>
                                    <div className='flex flex-col gap-2 justify-center h-full ml-6'>
                                        <h1 className='font-bold'>{p.title}</h1>
                                        <p className=''>RS. {p.price}</p>
                                    <div className='flex bg-gray-100'>
                                        <button className='border w-7 bg-gray-200 rounded-sm cursor-pointer' onClick={handleDecrease}>-</button>
                                        <span className='w-8 text-center'>{count}</span>
                                        <button className='border w-7 bg-gray-200 rounded-sm cursor-pointer' onClick={handleIncrease}>+</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )


                    }) : <div className='flex justify-center m-4'>
                        <h3>Your Cart is Empty</h3>
                    </div>
            } {
                cart.length > 0 &&
                <button className='bg-blue-600 text-white rounded-sm px-5 py-2 block mx-auto my-6' onClick={handlePlaceOrder}>Place Order</button>
            }
        </div>
    )
}

export default MyCart