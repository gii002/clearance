import React, { useContext, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { ClearanceContext } from "../context/ClearanceContext";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const { student } = useContext(ClearanceContext);

  // For this example, we mock student data if not coming from context
  const currentStudent = student || {
    name: "Gift Banda",
    regNo: "MUBAS/ICT/2023/001",
    department: "ICT",
    year: "2023",
  };

  const [formData, setFormData] = useState({
    finance: "N/A",
    accommodation: "N/A",
    library: "N/A",
    sports: "N/A",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Clearance submitted!\n\nFinance: ${formData.finance}\nAccommodation: ${formData.accommodation}\nLibrary: ${formData.library}\nSports: ${formData.sports}`
    );
  };

  const handleDownloadCertificate = () => {
    alert("🎓 Your digital clearance certificate will be available soon!");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Student Clearance Form</h1>
        <p className="student-name">{currentStudent.name}</p>
        <p className="student-reg">{currentStudent.regNo}</p>
        <p className="student-dept">{currentStudent.department} - {currentStudent.year}</p>
      </div>

      <form className="clearance-form" onSubmit={handleSubmit}>
        <label>Finance</label>
        <input
          type="text"
          name="finance"
          value={formData.finance}
          onChange={handleChange}
        />

        <label>Accommodation</label>
        <input
          type="text"
          name="accommodation"
          value={formData.accommodation}
          onChange={handleChange}
        />

        <label>Library</label>
        <input
          type="text"
          name="library"
          value={formData.library}
          onChange={handleChange}
        />

        <label>Sports</label>
        <input
          type="text"
          name="sports"
          value={formData.sports}
          onChange={handleChange}
        />

        <button type="submit">Submit Clearance</button>
      </form>

      <div className="certificate-button-container">
        <button onClick={handleDownloadCertificate}>
          <FaDownload className="icon" /> Download Certificate
        </button>
      </div>
    </div>
  );
}
