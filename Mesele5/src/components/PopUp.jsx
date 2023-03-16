import React, { useRef } from "react";
import axios from "axios";
const PopUp = ({ setStudents, students }) => {
  const addNewStudent = () => {
    if (
      nameRef.current.value === "" ||
      surnameRef.current.value === "" ||
      yearOfBirthRef.current.value === ""
    ) {
      alert("Xanaları doldurun");
    } else if (/\s/g.test(nameRef.current.value)) {
      alert("Ad xanasını düzgün doldurun");
    } else if (/\s/g.test(surnameRef.current.value)) {
      alert("Soyad xanasını düzgün doldurun");
    } else if (/\s/g.test(yearOfBirthRef.current.value)) {
      alert("Təvəllüd xanasını düzgün doldurun");
    } else {
      const newStudent = {
        name: nameRef.current.value,
        surname: surnameRef.current.value,
        yearOfBirth: yearOfBirthRef.current.value,
      };
      const checkStudent = students.find(
        (student) =>
          student.name == nameRef.current.value &&
          student.surname == surnameRef.current.value &&
          student.yearOfBirth == yearOfBirthRef.current.value
      );
      if (checkStudent) {
        alert("Artıq bu tələbə var");
      } else {
        axios
          .post("http://localhost:3000/students", {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            yearOfBirth: yearOfBirthRef.current.value,
          })
          .then((res) => console.log(res));
        setStudents((students) => [...students, newStudent]);
      }
      nameRef.current.value = "";
      surnameRef.current.value = "";
      yearOfBirthRef.current.value = "";
    }
  };
  const nameRef = useRef();
  const surnameRef = useRef();
  const yearOfBirthRef = useRef();

  return (
    <div className="popUpContainer">
      <input ref={nameRef} type="text" name="" id="" />
      <input ref={surnameRef} type="text" name="" id="" />
      <input ref={yearOfBirthRef} type="date" name="" id="" />
      <button onClick={addNewStudent}>Qeydiyyat</button>
    </div>
  );
};

export default PopUp;
