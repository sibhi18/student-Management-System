import img from "../assets/student.jpg"

function Navbar(){
    return(
        <header className="navbar">
            <img src={img} className="logo" alt="Student Management logo" />
            <div className="navbar-content">
                <h1>Student Management System</h1>
                <h7>Manage your students efficiently</h7>
            </div>
        </header>
    )
}


export default Navbar;