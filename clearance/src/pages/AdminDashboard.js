import React, { useContext } from "react";
import { ClearanceContext } from "../context/ClearanceContext";
import {FaArrowLeft, FaEnvelope, FaCheckCircle, FaClock } from "react-icons/fa";
import "./Pages.css";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const { departments, students, sendReminder } = useContext(ClearanceContext);

  // Compute clearance stats
  const clearedCount = departments.filter((d) => d.status === "Cleared").length;
  const pendingCount = departments.filter((d) => d.status === "Pending").length;

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
        Admin Dashboard
      </h1>
      <Link to="/admin" className="text-blue-600 hover:text-blue-800 flex items-center">
          <FaArrowLeft className="mr-2" /> Back
        </Link>

      {/* Department Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg text-center">
          <h2 className="text-lg font-semibold text-blue-700">Cleared Departments</h2>
          <p className="text-3xl font-bold text-green-600">{clearedCount}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg text-center">
          <h2 className="text-lg font-semibold text-yellow-700">Pending Departments</h2>
          <p className="text-3xl font-bold text-yellow-600">{pendingCount}</p>
        </div>
      </div>

      {/* Students Table */}
      <div>
        <h2 className="text-xl font-semibold text-blue-700 mb-4">All Students</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Reg Number</th>
                <th className="p-3 text-left">Clearance Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => {
                // Simple status calculation
                const status =
                  clearedCount === departments.length ? "Cleared" : "Pending";

                return (
                  <tr key={student.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{student.name}</td>
                    <td className="p-3">{student.regNo}</td>
                    <td className="p-3 flex items-center">
                      {status === "Cleared" ? (
                        <span className="text-green-600 flex items-center">
                          <FaCheckCircle className="mr-2" /> Cleared
                        </span>
                      ) : (
                        <span className="text-yellow-600 flex items-center">
                          <FaClock className="mr-2" /> Pending
                        </span>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => sendReminder(student.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-xs flex items-center justify-center mx-auto"
                      >
                        <FaEnvelope className="mr-2" /> Send Reminder
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
