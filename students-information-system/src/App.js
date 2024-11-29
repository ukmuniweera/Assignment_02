import React, { useState } from 'react';

function App() {
  const [details, setDetails] = useState({ regno: '', name: '', age: '', course: '', gpa: '' });
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState('');

  const getInputs = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!details.regno || !details.name) {
      setMessage('Registration number and name are required.');
      return false;
    }
    if (students.some((student) => student.regno === details.regno)) {
      setMessage('Duplicate registration number is not allowed.');
      return false;
    }
    setMessage('');
    return true;
  };

  const handleRegister = () => {
    if (!validateForm()) return;
    setStudents((prev) => [...prev, details]);
    setDetails({ regno: '', name: '', age: '', course: '', gpa: '' });
  };

  const handleDelete = (regno) => {
    setStudents((prev) => prev.filter((student) => student.regno !== regno));
  };

  const calculateSummary = () => {
    const totalStudents = students.length;
    const averageAge = (
      students.reduce((sum, student) => sum + Number(student.age || 0), 0) / totalStudents || 0
    ).toFixed(1);
    const averageGpa = (
      students.reduce((sum, student) => sum + Number(student.gpa || 0), 0) / totalStudents || 0
    ).toFixed(2);
    return { totalStudents, averageAge, averageGpa };
  };

  const { totalStudents, averageAge, averageGpa } = calculateSummary();

  const getGpaClass = (gpa) => {
    if (gpa >= 3.7) return 'green';
    if (gpa >= 3.0) return 'orange';
    return 'red';
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Student Registration</h1>
      <table>
        <tbody>
          <tr>
            <td>Registration No:</td>
            <td>
              <input
                type="text"
                name="regno"
                value={details.regno}
                onChange={getInputs}
              />
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" name="name" value={details.name} onChange={getInputs} />
            </td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>
              <input type="number" name="age" value={details.age} onChange={getInputs} />
            </td>
          </tr>
          <tr>
            <td>Course:</td>
            <td>
              <input type="text" name="course" value={details.course} onChange={getInputs} />
            </td>
          </tr>
          <tr>
            <td>GPA:</td>
            <td>
              <input type="number" step="0.1" name="gpa" value={details.gpa} onChange={getInputs} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleRegister}>Register</button>
            </td>
          </tr>
        </tbody>
      </table>
      {message && <p style={{ color: 'red' }}>{message}</p>}

      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students have been added yet.</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.regno} style={{ marginBottom: '10px' }}>
              <span>
                Reg No: {student.regno}, Name: {student.name}, Age: {student.age}, Course: {student.course}, GPA:{' '}
                <span style={{ color: getGpaClass(student.gpa) }}>{student.gpa}</span>
              </span>
              <button onClick={() => handleDelete(student.regno)} style={{ marginLeft: '10px' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <h2>Summary</h2>
      <p>Total Students: {totalStudents}</p>
      <p>Average Age: {averageAge}</p>
      <p>Average GPA: {averageGpa}</p>
    </div>
  );
}

export default App;
