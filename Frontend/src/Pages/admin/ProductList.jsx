import { useEffect,useState } from "react";
import api from "../api/axios";
import {Link} from "react-router";

export default function ProductList()
{
    const [products,setproducts] = useState([]);
    const loadproducts = async() => {
        const response = await api.get("/products");
        setproducts(response.data);
    }

    const deleteProduct = async (id) => {
        try{
            await api.delete('/products/delete/${id}');
            alert("Product deleted sucessfully!");
            loadProduct();

        }
        catch(error)
        {
            console.error("error deleting product :",err);
        }
    }
    useEffect(() => {
        loadproduct();

    },[]);
    return (
        <div className="max-w-4xl mx-auto mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Product List</h2>
                <link to="/admin/products/add" className="bg-blue-500 text-white px-4 py-2 rounded">Add New Product</link>
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
                {product.map((product) => (
                    <tr key={Product.id} className="text-center">
                        <td className="border border-gray-200 px-4 py-2">{Product.title}</td>
                        <td className="border border-gray-200 px-4 py-2">{Product.Price}</td>
                        <td className="border border-gray-200 px-4 py-2">{Product.stock}</td>
                        <td className="border border-gray-200 px-4 py-2">
                            <link to={`/admin/product/edit/${product.id}`} className="">Edit</link>
                            <button onClick={()=>deletedProduct(product.id)}
                            className="text-red-500 hover:underline">
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