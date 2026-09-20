import { useNavigate } from 'react-router-dom'

import StudentCard from '../components/StudentCard'

import {
  useStudentContext
} from '../context/StudentContext'


function Students() {

  const navigate = useNavigate()

  const {
    students,
    deleteStudent
  } = useStudentContext()


  return (
    <main className="dashboard">

      <section className="student-section">

        <h2>Students</h2>

        <div className="student-list">

          {students.map(student => (

            <StudentCard

              key={student.id}

              title={student.title}

              email={student.email}

              branch={student.branch}

              onEdit={() =>
                navigate(
                  `/add-student/${student.id}`
                )
              }

              onDelete={() =>
                deleteStudent(student.id)
              }

            />

          ))}

        </div>

      </section>

    </main>
  )
}

export default Students