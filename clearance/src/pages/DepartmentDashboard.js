import React, { useContext } from "react";
import {FaArrowLeft, FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";
import { ClearanceContext } from "../context/ClearanceContext";
import "./Pages.css";
import { Link } from "react-router-dom";

export default function DepartmentDashboard() {
  const { departments, updateDepartmentStatus } = useContext(ClearanceContext);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
        Department Clearance Dashboard
      </h2>
      <Link to="/department" className="text-blue-600 hover:text-blue-800 flex items-center">
          <FaArrowLeft className="mr-2" /> Back
        </Link>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dept, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
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
                <td className="p-3 flex justify-center space-x-2">
                  <button
                    onClick={() => updateDepartmentStatus(dept.name, "Cleared")}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-xs"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => updateDepartmentStatus(dept.name, "Rejected")}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => updateDepartmentStatus(dept.name, "Pending")}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-xs"
                  >
                    Pending
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
