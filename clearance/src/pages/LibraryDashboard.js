import React from "react";
import ClearanceForm from "../components/ClearanceForm";

const libraryStudents = [
  { regNo: "ST002", name: "Bob", status: "Cleared" },
  { regNo: "ST004", name: "David", status: "Pending" },
];

export default function LibraryDashboard() {
  return <ClearanceForm department="Library" studentsData={libraryStudents} />;
}
