"use client";

import { useState, useEffect } from "react";
import { getListOfUsers, addUser } from "../services/localStorage";
import UserItem from "./UserItem";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(getListOfUsers());
    }, []);

    const updateUser = (id, updatedData) => {
        const updatedUsers = users.map((user) =>
            user.id === id ? { ...user, ...updatedData } : user
        );
        setUsers(updatedUsers);
        localStorage.setItem("@users", JSON.stringify(updatedUsers));
    };

    const deleteUser = (id) => {
        const filteredUsers = users.filter((user) => user.id !== id);
        setUsers(filteredUsers);
        localStorage.setItem("@users", JSON.stringify(filteredUsers));
    };

    return (
        <div>
            <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
                {users.length > 0 ? (
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">No</th>
                                <th scope="col" className="px-6 py-3">Nama</th>
                                <th scope="col" className="px-6 py-3">Alamat</th>
                                <th scope="col" className="px-6 py-3">Nomor Telepon</th>
                                <th scope="col" className="px-6 py-3">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <UserItem
                                    key={user.id}
                                    user={user}
                                    index={index}
                                    onUpdateUser={updateUser}
                                    onDeleteUser={deleteUser}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No users found</p>
                )}
            </div>
        </div>
    );
}
