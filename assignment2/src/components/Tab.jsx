import React from "react";
import { students } from "../data/StudentsDb";

export default function Tab({ studentId }) {
  const student = students.find((s) => s.studentId === studentId);

  return (
    <div>
      <img src={require('../assets/profilepic/'+student.profilePic)} alt="Profile"/>
      <p>Full Name: {student.firstName} {student.lastName}</p>
      <p>Age: {student.age}</p>      
      <p>Course: {student.course}</p>
      <p>Gender: {student.gender}</p>
      <p>Country: {student.address.country}</p>
      <p>Skills: {student.skills.join(", ")}</p>
    </div>
  );
}