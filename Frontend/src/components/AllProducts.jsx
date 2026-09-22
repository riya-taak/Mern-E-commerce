import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function AllProducts() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const f = await fetch("http://localhost:5001/api/products", {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
         const data = await f.json();
        setProducts(data.product);


    }
    useEffect(() => {
        fetchProducts();
    }, []);


    return (

        <div className='flex flex-col justify-center items-center '>

            <h2 className="text-2xl font-bold mb-6"> All Products</h2>
            <div className='flex gap-10 w-300 p-5 overflow-x-scroll '>

                {
                    products.map((a) => {
                        return <ProductCard product={a} />
                    })
                }
            </div>
        </div>
    )
}

export default AllProducts