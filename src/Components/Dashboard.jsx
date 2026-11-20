function Dashbord({ page, setPage, students}) {
  const activeStudents = students.filter(
    (student) => student.Status?.toLowerCase() === "active"
  );
  const inactiveStudents = students.filter(
    (student) => student.Status?.toLowerCase() === "inactive"
  );
  const courseCount = new Set(
    students.map((student) => student.course).filter(Boolean)
  ).size;

  return (
    <div className="main-Container">
      <ul className="main-btn">
        <li>
          <button onClick={() => setPage("dashboard")}>Dashboard</button>
        </li>
        <li>
          <button onClick={() => setPage("students")}>Students</button>
        </li>
        <li>
          <button onClick={() => setPage("add-student")}>Add Student</button>
        </li>
      </ul>

      {page === "dashboard" && (
        <>
          <div className="sm-Content">
            <h1>Student Management System</h1>
            <h3>Welcome back! here's a dashboard Overview</h3>
          </div>

          <div className="main-grid">
            <div className="sm-grid">
              <p>Total Students</p>
              <strong>{students.length}</strong>
            </div>

            <div className="sm-grid">
              <p>Active Students</p>
              <strong>{activeStudents.length}</strong>
            </div>

            <div className="sm-grid">
              <p>Inactive Students</p>
              <strong>{inactiveStudents.length}</strong>
            </div>

            <div className="sm-grid">
              <p>total Courses</p>
              <strong>{courseCount}</strong>
            </div>
          </div>

          <div className="bottom-container">
            <h3>Quick Action</h3>
            <p>common take you might want to perform </p>

            <div className="sm-bottom">
              <button className="sm-btm" onClick={() => setPage("students")}>
                View all Students
              </button>

              <button className="sm-btm" onClick={() => setPage("add-student")}>
                Add students
              </button>

              <button
                className="sm-btm"
                onClick={() => setPage("manage-student")}
              >
                Manage Course
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashbord;
