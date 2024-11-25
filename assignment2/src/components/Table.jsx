import React, { useState } from "react";
import { students } from "../data/StudentsDb";
import Tab from "./Tab";

export default function Table() {
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  return (
    <div>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course</th>
            <th>Country</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.studentId}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.course}</td>
              <td>{student.address.country}</td>
              <td>
                <button onClick={() => setSelectedStudentId(student.studentId)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStudentId && <Tab studentId={selectedStudentId} />}
    </div>
  );
}
