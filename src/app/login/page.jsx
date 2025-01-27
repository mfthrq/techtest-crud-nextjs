"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { login, setDefaultUser } from "../services/auth";

export default function LoginPage() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        setDefaultUser(); // Initialize default user on first load
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(formData.username, formData.password)) {
            router.push("/"); // Redirect to home on successful login
        } else {
            setError("Invalid username or password!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-96"
            >
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-500 dark:text-gray-400">Login</h1>
                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded text-black"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
