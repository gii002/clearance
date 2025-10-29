import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import image from "../public/logo.jpg"; // ✅ Make sure your logo path is correct

export default function Login() {
  const [role, setRole] = useState("student");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [password, setPassword] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [deptPassword, setDeptPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "student") {
      if (!registrationNumber || !password) {
        alert("Please enter registration number and password");
        return;
      }
      localStorage.setItem(
        "user",
        JSON.stringify({ role: "student", registrationNumber })
      );
      navigate("/student");
    } else if (role === "department") {
      if (!departmentName || !deptPassword) {
        alert("Please enter department name and password");
        return;
      }
      localStorage.setItem(
        "user",
        JSON.stringify({ role: "department", departmentName })
      );
      navigate("/department");
    } else if (role === "admin") {
      localStorage.setItem("user", JSON.stringify({ role: "admin" }));
      navigate("/admin");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* ✅ Logo in top-left corner */}
        <div className="logo-container">
          <img src={image} alt="Logo" className="login-logo" />
        </div>

        <h2 className="login-title">Login</h2>

        <div className="form-group">
          <label>Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="student">Student</option>
            <option value="department">Department</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {role === "student" && (
          <div className="form-group">
            <input
              type="text"
              placeholder="Registration Number"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}

        {role === "department" && (
          <div className="form-group">
            <input
              type="text"
              placeholder="Department Name"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={deptPassword}
              onChange={(e) => setDeptPassword(e.target.value)}
            />
          </div>
        )}

        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
    }
