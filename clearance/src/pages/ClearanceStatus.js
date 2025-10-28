import React, { useState } from "react";
import { FaArrowLeft, FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Pages.css";

function ClearanceStatus() {
  const [departments, setDepartments] = useState([
    {
      name: "Library",
      status: "Cleared",
      officer: "Mrs. Phiri",
      date: "2025-10-20",
      remarks: "No outstanding books.",
    },
    {
      name: "Finance",
      status: "Pending",
      officer: "Mr. Banda",
      date: null,
      remarks: "Tuition balance not cleared.",
    },
    {
      name: "Sports",
      status: "Cleared",
      officer: "Mr. Mbewe",
      date: "2025-10-21",
      remarks: "All equipment returned.",
    },
    {
      name: "Accommodation",
      status: "Pending",
      officer: "Mrs. Kamphale",
      date: null,
      remarks: "Room inspection scheduled.",
    },
    {
      name: "Registrar",
      status: "Pending",
      officer: "Dr. Chirwa",
      date: null,
      remarks: "Awaiting all department clearances.",
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-6">
        <Link to="/student" className="text-blue-600 hover:text-blue-800 flex items-center">
          <FaArrowLeft className="mr-2" /> Back
        </Link>
        <h2 className="text-xl font-semibold text-center flex-grow text-blue-700">
          Clearance Status Details
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg text-sm">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Officer</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="p-3 font-medium">{dept.name}</td>
                <td className="p-3">
                  {dept.status === "Cleared" ? (
                    <span className="flex items-center text-green-600">
                      <FaCheckCircle className="mr-2" /> Cleared
                    </span>
                  ) : dept.status === "Pending" ? (
                    <span className="flex items-center text-yellow-600">
                      <FaClock className="mr-2" /> Pending
                    </span>
                  ) : (
                    <span className="flex items-center text-red-600">
                      <FaTimesCircle className="mr-2" /> Rejected
                    </span>
                  )}
                </td>
                <td className="p-3">{dept.officer}</td>
                <td className="p-3">{dept.date || "-"}</td>
                <td className="p-3">{dept.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          <strong>Note:</strong> Please follow up with pending departments to complete your clearance process.
        </p>
      </div>
    </div>
  );
}

export default ClearanceStatus;
