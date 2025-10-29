import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="nav-links">
        {user?.role === "student" && (
          <h1>MUBAS Clearance System</h1>
          <>
            <Link to="/student">Dashboard</Link>
            <Link to="/status">Clearance Status</Link>
          </>
        )}

        {user?.role === "department" && (
          <h1>MUBAS Clearance System</h1>
          <>
            <Link to="/department">Dashboard</Link>
            {/* Mobile dropdown toggle */}
            <button
              className="dropdown-toggle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Departments ▾
            </button>

            <div className={`dropdown ${showDropdown ? "show" : ""}`}>
              <Link to="/department/finance">Finance</Link>
              <Link to="/department/sports">Sports</Link>
              <Link to="/department/library">Library</Link>
              <Link to="/department/accommodation">Accommodation</Link>
            </div>
          </>
        )}

        {user?.role === "admin" && <Link to="/admin">Admin Dashboard</Link>}

        {user && <button onClick={handleSignOut}>Sign Out</button>}
      </div>
    </nav>
  );
}
