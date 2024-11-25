import React from "react";
import { students } from "../data/StudentsDb";

export default function Tab({ studentId }) {
  const student = students.find((s) => s.studentId === studentId);

  return (
    <div>
      <h1>Details of {student.firstName}</h1>
      <p>Full Name: {student.firstName} {student.lastName}</p>
      <p>Course: {student.course}</p>
      <p>Country: {student.address.country}</p>
      <p>Skills: {student.skills.join(", ")}</p>
    </div>
  );
}
