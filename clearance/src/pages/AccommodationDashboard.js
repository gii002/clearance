import React from "react";
import ClearanceForm from "../components/ClearanceForm";

const accommodationStudents = [
  { regNo: "ST001", name: "Alice", status: "Pending" },
  { regNo: "ST004", name: "David", status: "Rejected" },
];

export default function AccommodationDashboard() {
  return (
    <ClearanceForm department="Accommodation" studentsData={accommodationStudents} />
  );
}
