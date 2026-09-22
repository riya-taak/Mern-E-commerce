import { useEffect, useState } from "react";
// import api from "../api/axios";
import { Link } from "react-router";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const loadProducts = async () => {
        // const response = await api.get("/products");
        const res = await fetch("http://localhost:5001/api/products", {
            method: "GET",
            header:
            {
                "Content-Type": "application/json",
            }
        });
        const response = await res.json();

        if (!res.ok) {
            throw new Error(response.message || "Something went wrong");
        }
        setProducts(response.product);
    }

    const deleteProduct = async (id) => {
        try {
            const res = await fetch(`http://localhost:5001/api/products/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const response = await res.json();

            if (!res.ok) {
                throw new Error(response.message || "Something went wrong");
            }

            alert(response.message);
            loadProducts();
        }
        catch (error) {
            console.error("error deleting product :", error);
        }
    }

    
    useEffect(() => {
        loadProducts();


    }, []);


    return (
        <div className="max-w-4xl mx-auto mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Product List</h2>
                <Link to="/admin/products/add" className="bg-blue-500 text-white px-4 py-2 rounded">Add New Product</Link>
            </div>
            <table className="w-full table-auto border-collapse border border-grey-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-2">ID</th>
                        <th className="border border-gray-200 px-4 py-2">Price</th>
                        <th className="border border-gray-200 px-4 py-2">Stock</th>
                        <th className="border border-gray-200 px-4 py-2">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id} className="text-center">
                            <td className="border border-gray-200 px-4 py-2">{product.title}</td>
                            <td className="border border-gray-200 px-4 py-2">{product.price}</td>
                            <td className="border border-gray-200 px-4 py-2">{product.stock}</td>
                            <td className="border border-gray-200 px-4 py-2 flex gap-2 justify-center">
                                <Link to={`/admin/products/update/${product._id}`} className=" px-5 py-1 rounded-sm cursor-pointer bg-blue-500 text-white">Edit</Link>
                                <button onClick={() => deleteProduct(product._id) }
                                    className="cursor-pointer bg-red-500 text-white px-5 py-1 rounded-sm">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


