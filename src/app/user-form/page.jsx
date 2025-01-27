"use client";

import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";
import { useState, useEffect } from "react";
import { getListOfUsers, addUser } from "../services/localStorage";
export default function UserFormPage() {
  const [users, setUsers] = useState([]);
  
      useEffect(() => {
          setUsers(getListOfUsers());
      }, []);
  
      const addUserToList = (user) => {
          addUser(user); // Add the user to localStorage
          setUsers(getListOfUsers()); // Update the state to reflect the new user
      };
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center items-center">
        <div className="container p-8">
          <h1 className="font-bold mb-4">Tambah Data User</h1>
          <UserForm onAddUser={addUserToList} />
        </div>
      </div>
    </div>
  );
}
