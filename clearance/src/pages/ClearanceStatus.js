import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ClearanceStatus.css";

function ClearanceStatus() {
  const [departments] = useState([
    { name: "Library", status: "Cleared", officer: "Mrs. Phiri", date: "2025-10-20", remarks: "No outstanding books." },
    { name: "Finance", status: "Pending", officer: "Mr. Banda", date: null, remarks: "Tuition balance not cleared." },
    { name: "Sports", status: "Cleared", officer: "Mr. Mbewe", date: "2025-10-21", remarks: "All equipment returned." },
    { name: "Accommodation", status: "Pending", officer: "Mrs. Kamphale", date: null, remarks: "Room inspection scheduled." },
    { name: "Registrar", status: "Pending", officer: "Dr. Chirwa", date: null, remarks: "Awaiting all department clearances." },
  ]);

  // Map status to percentage for visual bar
  const statusPercent = (status) => {
    if (status === "Cleared") return 100;
    if (status === "Pending") return 50;
    return 0;
  };

  const statusClass = (status) => {
    if (status === "Cleared") return "status-cleared";
    if (status === "Pending") return "status-pending";
    return "status-rejected";
  };

  return (
    <div className="clearance-container">
      <div className="clearance-header">
        <Link to="/student">
          <FaArrowLeft className="mr-2" /> Back
        </Link>
        <h2>Clearance Status Dashboard</h2>
      </div>

      <div className="department-list">
        {departments.map((dept, idx) => (
          <div key={idx} className="department-item">
            <div className="department-header">
              <span>{dept.name}</span>
              <span className={`status-text ${statusClass(dept.status)}`}>
                {dept.status}
              </span>
            </div>

            <div className="status-bar-container">
              <div
                className={`status-bar ${statusClass(dept.status)}`}
                style={{ width: `${statusPercent(dept.status)}%` }}
              ></div>
            </div>

            <div className="department-details">
              <span>Officer: {dept.officer}</span>
              <span>Date: {dept.date || "-"}</span>
              <span>Remarks: {dept.remarks}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="clearance-note">
        <strong>Note:</strong> Follow up with pending departments to complete your clearance process.
      </div>
    </div>
  );
}

export default ClearanceStatus;
