"use client";

import { useState } from "react";
import { getListOfUsers, addUser } from "../services/localStorage";

export default function UserItem({ user, index, onUpdateUser, onDeleteUser }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValues, setEditValues] = useState({ ...user });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditValues({
            ...editValues,
            [name]: value,
        });
    };

    const handleSave = () => {
        onUpdateUser(user.id, editValues); // Memanggil fungsi update dari parent
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDeleteUser(user.id); // Memanggil fungsi delete dari parent
    };

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
            </th>
            {isEditing ? (
                <>
                    <td className="px-6 py-4">
                        <input
                            type="text"
                            name="nama"
                            value={editValues.nama}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        />
                    </td>
                    <td className="px-6 py-4">
                        <input
                            type="text"
                            name="alamat"
                            value={editValues.alamat}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        />
                    </td>
                    <td className="px-6 py-4">
                        <input
                            type="text"
                            name="no_telp"
                            value={editValues.no_telp}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                        />
                    </td>
                </>
            ) : (
                <>
                    <td className="px-6 py-4">{user.nama}</td>
                    <td className="px-6 py-4">{user.alamat}</td>
                    <td className="px-6 py-4">{user.no_telp}</td>
                </>
            )}
            <td className="px-6 py-4">
                {isEditing ? (
                    <>
                        <button
                            onClick={handleSave}
                            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                        >
                            Edit
                        </button>
                        <button
                            onClick={handleDelete}
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Hapus
                        </button>
                    </>
                )}
            </td>
        </tr>
    );
}
