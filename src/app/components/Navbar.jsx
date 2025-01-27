"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar(){
    const [username, setUsername] = useState("");
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("@defaultUser");
        const isLoggedIn = localStorage.getItem("@isLoggedIn");
    
        if (isLoggedIn === "true" && storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUsername(parsedUser.username); // Menampilkan username jika sudah login
        } else {
          setUsername(""); // Kosongkan username jika belum login
        }
      }, []);
    
    const user = JSON.parse(localStorage.getItem("@defaultUser"));

    const handleLogout = () => {
        localStorage.setItem("@isLoggedIn", "false");  // Set status login menjadi false
        router.push("/login");  // Redirect ke halaman login
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Technical Test</span>
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="/user-form" className="flex items-center space-x-2 bg-blue-700 text-white font-medium rounded-lg text-sm px-4 py-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Tambah Data</a>
                    </li>
                    <li>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center space-x-2 bg-blue-700 text-white font-medium rounded-lg text-sm px-4 py-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            <span>{user?.username || "Guest"}</span>
                            <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            ></path>
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute mt-4 bg-red-500 rounded-md shadow-lg">
                            <button
                                onClick={handleLogout}
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300"
                            >
                                Logout
                            </button>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    )
}