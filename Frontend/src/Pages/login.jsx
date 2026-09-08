import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../api/axios";
import { useNavigate } from "react-router";


export default function Login() {
    const [form, setform] = useState({
        email: "",
        password: ""
    })
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        alert("dfghjk");
        try {
            const data = {
                email: e.target[1].value,
                password: e.target[2].value
            }
            const res = await fetch("http://localhost:5001/api/auth/login", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),

            });
            const response = await res.json();

            if (!res.ok) {
                throw new Error(response.message || "Something went wrong");
            }
            // localStorage.setItem("token", res.data.token);
            console.log(response);
            // setMsg("login sucessfully");
            // setTimeout(() => {
            //     navigate("/home");
            // }, 1000)
        }
        catch (err) {
            setMsg(err.response?.data?.message || "An error occurred");
        }
    }
    return (
        <div className="flex item-center justify-content min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-lg shawdow-md w-full max-w-sm">
                <h2 className="text-2xl font-blod mb-6 text-center ">login to your Account</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-grey-300 rounded-md focus:outline-none"
                        required />

                    <input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-grey-300 rounded-md focus:outline-none"
                        required />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 ">
                        login
                    </button>
                </form>
            </div>
        </div>

    )
}
