import React from "react";
import ClearanceForm from "../components/ClearanceForm";

const financeStudents = [
  { regNo: "ST001", name: "Alice", status: "Pending" },
  { regNo: "ST002", name: "Bob", status: "Cleared" },
];

export default function FinanceDashboard() {
  return <ClearanceForm department="Finance" studentsData={financeStudents} />;
}
