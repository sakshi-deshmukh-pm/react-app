import {
  useState,
  useEffect
} from 'react'

import {
  useNavigate,
  useParams
} from 'react-router-dom'

import {
  useStudentContext
} from '../context/StudentContext'


function AddStudent() {

  const navigate = useNavigate()

  const { id } = useParams()

  const {
    students,
    addStudent,
    editStudent
  } = useStudentContext()


  const editId = id
    ? Number(id)
    : null


  const student = students.find(
    student => student.id === editId
  )


  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [branch, setBranch] = useState('')


  useEffect(() => {

    if (student) {

      setName(student.title)

      setEmail(student.email)

      setBranch(student.branch)

    }

  }, [student])


  function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault()


    if (!name || !email || !branch) {

      alert('Please fill all fields')

      return
    }


    if (
      editId !== null &&
      student
    ) {

      editStudent(
        editId,
        name,
        email,
        branch
      )

    } else {

      addStudent(
        name,
        email,
        branch
      )

    }


    navigate('/students')
  }


  return (

    <main className="dashboard">

      <section className="student-section">

        <h2>
          {editId
            ? 'Edit Student'
            : 'Add Student'
          }
        </h2>


        <form
          className="student-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={
              e => setName(e.target.value)
            }
          />


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={
              e => setEmail(e.target.value)
            }
          />


          <input
            type="text"
            placeholder="Branch"
            value={branch}
            onChange={
              e => setBranch(e.target.value)
            }
          />


          <button type="submit">

            {editId
              ? 'Update Student'
              : 'Add Student'
            }

          </button>

        </form>

      </section>

    </main>
  )
}

export default AddStudent
