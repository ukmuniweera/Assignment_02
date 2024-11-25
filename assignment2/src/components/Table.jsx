import React from 'react'
import { students } from '../data/StudentsDb';

export default function table() {
  return (
    <div>
        <table border="1">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Course</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student)=>(
                    <tr>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.course}</td>
                        <td>{student.address.country}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
