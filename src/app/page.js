"use client";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center items-center">
        <div className="container p-8">
          <h1 className="font-bold mb-4">Data List User</h1>
          <UserList/>
        </div>
      </div>
    </div>
  );
}
