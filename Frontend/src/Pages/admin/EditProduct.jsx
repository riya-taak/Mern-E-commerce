import { useEffect, useState } from "react";
// import api from "../api/axios";
import { useParams, useNavigate } from "react-router";


export default function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    // console.log(id);
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
        stock: "",
    });
    const allowedFields = ["title", "description", "price", "category", "image", "stock"];

    const loadProduct = async () => {
        // const res = await api.get('/products');
        // const product = res.data.find((p) => p.id === parseInt(id));
        // setForm(product);

        const res = await fetch("http://localhost:5001/api/products", {

            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        const product = data.product.find((p) => p._id === id);
        setForm(product);
    }
    useEffect(() => {
        loadProduct();
    }, []);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        // await api.put('/product/update/${id}',form);
        // alert('Product updated sucessfully');
        // navigation('/admin/products');
         

        try {
            const res = await fetch(`http://localhost:5001/api/products/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const response = await res.json();

            if (!res.ok) {
                throw new Error(response.message || "Something went wrong");
            }

            alert("Product updated successfully");
            navigate("/admin/products");
        }
        catch (error) {
            console.error("error updating product:", error);
            alert(error.message || "Failed to update product");
        }
     };

    return (
        <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow rounded">
            <h2 className="text-2xl- font-bold mb-6">Edit Product</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                {
                    Object.keys(form).map((key) => (
                        allowedFields.includes(key) &&
                        <input
                            key={key}
                            name={key}
                            value={form[key]}
                            onChange={handleChange}
                            placeholder={key}
                            className="w-full border border-gray-300 rounded px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        </input>
                    ))}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
                >
                    Update Product
                </button>

            </form>
        </div>
    )
}