// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import DepartmentDashboard from "./pages/DepartmentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ClearanceStatus from "./pages/ClearanceStatus";
import FinanceDashboard from "./pages/FinanceDashboard";
import SportsDashboard from "./pages/SportsDashboard";
import LibraryDashboard from "./pages/LibraryDashboard";
import AccommodationDashboard from "./pages/AccommodationDashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          {/* Login */}
          <Route path="/" element={<Login />} />

          {/* Student */}
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/status" element={<ClearanceStatus />} />

          {/* Department */}
          <Route path="/department" element={<DepartmentDashboard />} />
          <Route path="/department/finance" element={<FinanceDashboard />} />
          <Route path="/department/sports" element={<SportsDashboard />} />
          <Route path="/department/library" element={<LibraryDashboard />} />
          <Route
            path="/department/accommodation"
            element={<AccommodationDashboard />}
          />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
