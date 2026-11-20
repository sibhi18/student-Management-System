import { useState } from "react"

function AddStudents({ onAddStudent}){

    const [student, setStudent] = useState({
        name: "",
        age: "",
        course: "",
        Status:""

    });

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddStudent({
            name: student.name.trim(),
            age: Number(student.age),
            course: student.course.trim(),
            Status:student.Status.trim()
        });
        setStudent({ name: "", age: "", course: "",Status:"" });
    };

    return(
        <div className="add-student">
            <div className="add-student-heading">
                <h2>Add Student</h2>
                <p>Enter the student's details below.</p>
            </div>
            <form onSubmit={handleSubmit} className="student-form">
                <label htmlFor="student-name">Name</label>
                <input
                    id="student-name"
                    type="text"
                    name="name"
                    value={student.name}
                    placeholder="Enter the student's name"
                    onChange={handleChange}
                    required
                />

                <label htmlFor="student-age">Age</label>
                <input
                    id="student-age"
                    type="number"
                    name="age"
                    value={student.age}
                    placeholder="Enter age"
                    onChange={handleChange}
                    min="1"
                    required
                />

                <label htmlFor="student-course">Course</label>
                <input
                    id="student-course"
                    type="text"
                    name="course"
                    value={student.course}
                    placeholder="Enter course"
                    onChange={handleChange}
                    required
                />

                <label htmlFor="student-status">Status</label>
                <select
                    id="student-status"
                    name="Status"
                    value={student.Status}
                    onChange={handleChange}
                    required
                >
                    <option value=" disabled">Select status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>

                <button type="submit" className="student-form-submit">Add Student</button>
            </form>
        </div>
    )
}

export default AddStudents;