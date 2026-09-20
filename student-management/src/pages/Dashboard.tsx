import { useStudentContext } from '../context/StudentContext'

function Dashboard() {

  const { students } = useStudentContext()

  const totalStudents = students.length

  const cseStudents = students.filter(
    student => student.branch === 'CSE'
  ).length

  const itStudents = students.filter(
    student => student.branch === 'IT'
  ).length

  return (
    <main className="dashboard">

      <div className="dashboard-header">

        <h1>
          Student Management System
        </h1>

        <p>
          Manage students and their information easily.
        </p>

      </div>

      <div className="stats">

        <div className="stat-card">
          <h3>Total Students</h3>
          <h2>{totalStudents}</h2>
        </div>

        <div className="stat-card">
          <h3>CSE Students</h3>
          <h2>{cseStudents}</h2>
        </div>

        <div className="stat-card">
          <h3>IT Students</h3>
          <h2>{itStudents}</h2>
        </div>

      </div>

    </main>
  )
}

export default Dashboard