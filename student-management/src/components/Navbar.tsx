import { Link } from 'react-router-dom'

interface NavbarProps {
  title: string
}

function Navbar({ title }: NavbarProps) {

  return (
    <nav className="navbar">

      <h2>{title}</h2>

      <div className="nav-links">

        <Link to="/">
          Dashboard
        </Link>

        <Link to="/students">
          Students
        </Link>

        <Link to="/add-student">
          Add Student
        </Link>

      </div>

    </nav>
  )
}

export default Navbar