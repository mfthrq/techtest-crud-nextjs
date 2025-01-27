"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function UserForm({ onAddUser }) {
    const [inputValues, setInputValues] = useState({
        nama: '',
        alamat: '',
        no_telp: ''
    });

    const router = useRouter();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddUser(inputValues); // Call onAddUser function passed from the parent
        setInputValues({ nama: '', alamat: '', no_telp: '' }); // Reset form after submission

        router.push("/"); // Redirect ke halaman utama setelah submit
    };

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
                <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                <input type="text" id="nama" name="nama" value={inputValues.nama} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nama User" required />
            </div>
            <div className="mb-5">
                <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                <input type="text" id="alamat" name="alamat" value={inputValues.alamat} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Alamat User" required />
            </div>
            <div className="mb-5">
                <label htmlFor="no_telp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Telepon</label>
                <input type="text" id="no_telp" name="no_telp" value={inputValues.no_telp} onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Nomor Telepon User" required />
            </div>
            
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    );
}
