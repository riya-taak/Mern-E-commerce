import React, { useContext } from 'react'
import { WishtListContext } from '../context/WishtListContext'
import { CartContext } from '../context/CartContext'


function ProductCard({ product }) {
    const { image, title, price } = product
    const {  toggleWishlist, isInWishlist } = useContext(WishtListContext)
    const {AddToCart} = useContext(CartContext)
    const inWishlist = isInWishlist(product._id)


    return (

        <div className='rounded-md border-2 h-80 w-75 shrink-0 flex flex-col justify-between items-center  relative'>
            <div>
                <span
                    className={`absolute top-2 right-2 rounded-full bg-white border w-8 h-8 flex justify-center items-center text-xl cursor-pointer ${inWishlist ? 'text-red-600' : 'text-gray-400'}`}
                    onClick={() => toggleWishlist(product)}
                >
                    ♥
                </span>
                <img src={image} className="h-50 py-2" alt="" />
            </div>
            <h3 className='text-xl font-bold '>{title}</h3>
            <div className='flex justify-between items-center w-full px-4 py-5'>
                <p>RS. {price}</p>
                <button className='bg-blue-900 w-20 text-white rounded-md py-1 cursor-pointer' onClick={() => AddToCart(product)}>Add</button>
            </div>
        </div>
    )
}

export default ProductCard