function ManageCourse({ students }) {
  return (
    <div className="all-student">
      <div className="student-table-heading">COURSE DETAILS</div>

      <div  className="student-table-wrapper">
        <table className="student-table" >
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">COURSE</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageCourse;
