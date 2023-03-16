import React from "react";

const Table = ({ students }) => {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Təvəllüd</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student,index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.yearOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
