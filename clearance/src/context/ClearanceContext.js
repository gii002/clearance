import React, { createContext, useState } from "react";
import "../pages/Pages.css";

export const ClearanceContext = createContext();

export const ClearanceProvider = ({ children }) => {
  const [departments, setDepartments] = useState([
    { name: "Library", status: "Pending" },
    { name: "Finance", status: "Pending" },
    { name: "Sports", status: "Pending" },
    { name: "Accommodation", status: "Pending" },
    { name: "Registrar", status: "Pending" },
  ]);

  const [students, setStudents] = useState([
    { id: 1, name: "Gift Banda", regNo: "MUBAS/ICT/2023/001" },
    { id: 2, name: "Thoko Mwale", regNo: "MUBAS/ICT/2023/002" },
    { id: 3, name: "Faith Kamanga", regNo: "MUBAS/ACC/2023/003" },
  ]);

  const updateDepartmentStatus = (deptName, newStatus) => {
    setDepartments((prev) =>
      prev.map((d) => (d.name === deptName ? { ...d, status: newStatus } : d))
    );
  };

  // Mock sending reminders
  const sendReminder = (studentId) => {
    const student = students.find((s) => s.id === studentId);
    alert(`📨 Reminder sent to ${student.name} (${student.regNo})`);
  };

  return (
    <ClearanceContext.Provider
      value={{
        departments,
        updateDepartmentStatus,
        students,
        sendReminder,
      }}
    >
      {children}
    </ClearanceContext.Provider>
  );
};
