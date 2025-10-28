import React from "react";
import ClearanceForm from "../components/ClearanceForm";

const sportsStudents = [
  { regNo: "ST001", name: "Alice", status: "Pending" },
  { regNo: "ST003", name: "Charlie", status: "Rejected" },
];

export default function SportsDashboard() {
  return <ClearanceForm department="Sports" studentsData={sportsStudents} />;
}
