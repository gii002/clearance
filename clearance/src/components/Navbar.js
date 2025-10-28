// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/Pages.css";

export default function Navbar() {
  const navigate = useNavigate();

  // Get user from localStorage (mocked auth)
  const user = JSON.parse(localStorage.getItem("user"));

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/"); // redirect to login
  };

  return (
    <nav className="bg-[#005BB5] text-white px-6 py-4 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-xl md:text-lg font-bold mb-2 md:mb-0">
        MUBAS Clearance System
      </h1>

      <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
        {/* Student Links */}
        {user?.role === "student" && (
          <>
            <Link to="/student" className="hover:text-[#F5F7FA]">
              Dashboard
            </Link>
            <Link to="/status" className="hover:text-[#F5F7FA]">
              Clearance Status
            </Link>
          </>
        )}

        {/* Department Links */}
        {user?.role === "department" && (
          <Link to="/department" className="hover:text-[#F5F7FA]">
            Department Dashboard
          </Link>
        )}

        {/* Admin Links */}
        {user?.role === "admin" && (
          <Link to="/admin" className="hover:text-[#F5F7FA]">
            Admin Dashboard
          </Link>
        )}

        {/* Sign Out Button */}
        {user && (
          <button
            onClick={handleSignOut}
            className="bg-[#EF4444] hover:bg-[#DC2626] text-white font-semibold px-4 py-2 rounded-md transition-all"
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}
