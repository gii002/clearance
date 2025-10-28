// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

export default function Login() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "student") navigate("/student");
    else if (role === "department") navigate("/department");
    else navigate("/admin");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <label className="block mb-2">Select Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="student">Student</option>
          <option value="department">Department</option>
          <option value="admin">Admin</option>
        </select>

        <button
          onClick={handleLogin}
          className="bg-blue-700 w-full text-white py-2 rounded hover:bg-blue-800"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
