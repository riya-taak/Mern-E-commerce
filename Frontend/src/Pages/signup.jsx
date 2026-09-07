import { useState } from "react";
import api from "../api/axios";


export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [msg, setMsg] = useState("");

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await api.post("auth/signup",form);
            setMsg(response.data.message);
        } catch(err){
            setMsg(err.response.data.message || "An error occurred");

        }
    }

    return (
        <div className="flex item-center justify-center min-h-screen bg-grey-100 px-4">
            <div className="bg-white p-8 rounded-lg shadow -md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
                {msg && (
                    <div className="mb-4 text-center text-sm text-blue-600 font-medium">
                        {msg}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type='text'
                        name='name'
                        placeholder=" Enter your name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name='email'
                        type='email'
                        placeholder="Enter email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                      <input
                        name='password'
                        type='password'
                        placeholder="Enter password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                    <button 
                    type="submit"
                    className="w-full px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>
                </form>

            </div>
        </div>
    )
}