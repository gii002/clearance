// src/components/ClearanceForm.js
import React, { useState } from "react";

export default function ClearanceForm({ department, studentsData }) {
  const [students, setStudents] = useState(studentsData);

  const handleStatusChange = (regNo, newStatus) => {
    const updatedStudents = students.map((s) =>
      s.regNo === regNo ? { ...s, status: newStatus } : s
    );
    setStudents(updatedStudents);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Cleared":
        return "text-[#22C55E]";
      case "Pending":
        return "text-[#FBBF24]";
      case "Rejected":
        return "text-[#EF4444]";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] p-6">
      <h1 className="text-3xl font-bold mb-6 text-[#0096FF] text-center">
        {department} Clearance
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-[#0096FF] text-white">
            <tr>
              <th className="py-2 px-4 text-left">Reg. No</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Update</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.regNo} className="border-b">
                <td className="py-2 px-4">{student.regNo}</td>
                <td className="py-2 px-4">{student.name}</td>
                <td
                  className={`py-2 px-4 font-semibold ${getStatusColor(
                    student.status
                  )}`}
                >
                  {student.status}
                </td>
                <td className="py-2 px-4 space-x-2">
                  <button
                    className="bg-[#22C55E] text-white px-3 py-1 rounded hover:bg-[#16A34A] transition-all"
                    onClick={() => handleStatusChange(student.regNo, "Cleared")}
                  >
                    Cleared
                  </button>
                  <button
                    className="bg-[#FBBF24] text-white px-3 py-1 rounded hover:bg-[#F59E0B] transition-all"
                    onClick={() => handleStatusChange(student.regNo, "Pending")}
                  >
                    Pending
                  </button>
                  <button
                    className="bg-[#EF4444] text-white px-3 py-1 rounded hover:bg-[#DC2626] transition-all"
                    onClick={() => handleStatusChange(student.regNo, "Rejected")}
                  >
                    Rejected
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
