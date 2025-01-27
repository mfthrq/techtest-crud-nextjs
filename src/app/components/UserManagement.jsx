"use client";

import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default function UserManagement() {
    const [users, setUsers] = useState([]); // State untuk menyimpan data pengguna

    // Fungsi untuk menambah pengguna baru
    const addUserToList = (newUser) => {
        setUsers([...users, newUser]);
    };

    return (
        <div className="w-full p-5">
            <h1 className="text-2xl font-bold mb-5">User Management</h1>
            <UserForm onAddUser={addUserToList} /> {/* Pastikan nama fungsi yang dikirim sesuai */}
            <UserList users={users} /> {/* Kirim daftar pengguna ke UserList */}
        </div>
    );
}
