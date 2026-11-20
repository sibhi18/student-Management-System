import { useState } from "react";
import Dashbord from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import AllStudents from "./pages/AllStudents";
import AddStudents from "./pages/AddStudents";
import ManageCourse from "./pages/ManageCourse";
import "./App.css";


function App() {
  const [page, setPage] = useState("dashboard");
  const [students, setStudents] = useState([]);

  const handleAddStudent = (student) => {
    setStudents((currentStudents) => [
      ...currentStudents,
      {
        ...student,
        id: Math.max(0, ...currentStudents.map(({ id }) => id)) + 1,
      },
    ]);
    setPage("students");
  };

  return (
    <>
      <Navbar />
      <Dashbord page={page} setPage={setPage} students={students} />
      {page === "students" && <AllStudents students={students} />}
      {page === "add-student" && <AddStudents onAddStudent={handleAddStudent} />}
      {page === "manage-student" && <ManageCourse students={students}/>}
    </>
  );
}

export default App;