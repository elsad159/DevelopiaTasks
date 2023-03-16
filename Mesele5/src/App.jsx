import { useState, useEffect } from "react";
import PopUp from "./components/PopUp";
import Table from "./components/Table";
import axios from "axios";
function App() {
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/students")
      .then((res) => setStudents(res.data));
  }, []);

  return (
    <div className="App">
      <button onClick={() => setOpen(!open)}>Click to open PopUp</button>
      {open && <PopUp setStudents={setStudents} students={students} />}
      <Table students={students} />
    </div>
  );
}

export default App;
