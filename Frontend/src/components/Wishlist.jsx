import React, { useContext, useState } from 'react'
import { WishtListContext } from '../context/WishtListContext'

function Wishlist() {
    const { wishlist, toggleWishlist } = useContext(WishtListContext)
    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-6">My Wishlist</h2>
            {
                wishlist.length > 0 ?
                    wishlist.map((p) => {
                        return (
                            <div className='flex justify-center m-6' key={p._id}>
                                <div className='border-2 h-auto py-4 w-90 rounded-lg flex justify-center items-center relative'>
                                    <span
                                        className='absolute -top-2.5 -left-2 rounded-full bg-white border w-7 h-7 flex justify-center items-center text-xl cursor-pointer text-red-600'
                                        onClick={() => toggleWishlist(p)}
                                    >
                                        ♥
                                    </span>
                                    <img src={p.image} className=' h-30 m-1.5 rounded-lg'></img>
                                    <div className='flex flex-col gap-2 justify-center h-full ml-6'>
                                        <h1 className='font-bold'>{p.title}</h1>
                                        <p className=''>RS. {p.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }) : <div className='flex justify-center m-4'>
                        <h3>Your Wishlist is Empty</h3>
                    </div>
            }
        </div>
    )
}

export default Wishlist