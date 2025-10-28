import React, { useContext } from "react";
import { FaCheckCircle, FaHourglassHalf, FaDownload } from "react-icons/fa";
import { ClearanceContext } from "../context/ClearanceContext";
import "./Pages.css";

export default function StudentDashboard() {
  const { departments } = useContext(ClearanceContext);

  const student = {
    name: "Gift Banda",
    regNo: "MUBAS/ICT/2023/001",
  };

  const total = departments.length;
  const cleared = departments.filter((d) => d.status === "Cleared").length;
  const progress = Math.round((cleared / total) * 100);

  const handleDownloadCertificate = () => {
    alert("🎓 Your digital clearance certificate will be available soon!");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">
          Student Clearance Dashboard
        </h1>
        <p className="text-gray-600 mt-1">{student.name}</p>
        <p className="text-gray-500 text-sm">{student.regNo}</p>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <p className="text-gray-700 font-semibold mb-2">Clearance Progress</p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className={`h-4 rounded-full ${
              progress === 100 ? "bg-green-600" : "bg-blue-600"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">{progress}% Completed</p>

        <div className="mt-4 text-center">
          <a
            href="/status"
            className="text-blue-700 hover:underline font-semibold"
          >
            View Clearance Details →
          </a>
        </div>
      </div>

      {/* Department list */}
      <div>
        <h2 className="text-lg font-semibold mb-3 text-blue-700">
          Department Status
        </h2>
        <ul className="space-y-3">
          {departments.map((dept, index) => (
            <li
              key={index}
              className="flex justify-between items-center border p-3 rounded-lg hover:bg-gray-50 transition"
            >
              <span className="font-medium">{dept.name}</span>
              {dept.status === "Cleared" ? (
                <span className="flex items-center text-green-600 font-semibold">
                  <FaCheckCircle className="mr-2" /> Cleared
                </span>
              ) : (
                <span className="flex items-center text-yellow-600 font-semibold">
                  <FaHourglassHalf className="mr-2" /> Pending
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Certificate button */}
      {progress === 100 && (
        <div className="text-center mt-8">
          <button
            onClick={handleDownloadCertificate}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition flex items-center justify-center mx-auto"
          >
            <FaDownload className="mr-2" /> Download Certificate
          </button>
        </div>
      )}
    </div>
  );
}
