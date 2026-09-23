import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import StudentCard from '../components/StudentCard'
import { getStudents } from '../services/studentService'
import type { Student } from '../types/Student'

import {
  useStudentContext
} from '../context/StudentContext'

import Container from '../components/ui/Container'
import TextField from '../components/ui/TextField'
import FormControl from '../components/ui/FormControl'
import InputLabel from '../components/ui/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '../components/ui/MenuItem'
import Box from '../components/ui/Box'



function Students() {

  const [apiStudents, setApiStudents] = useState<Student[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState('')
  const [branchFilter, setBranchFilter] = useState('')


  async function loadStudents() {

    try {

      const data = await getStudents()

      setApiStudents(data)

      setLoading(false)

    } catch (error) {

      setError("Failed to load students")

      setLoading(false)

    }

  }


  useEffect(() => {

    loadStudents()

  }, [])


  const navigate = useNavigate()

  const {
    students,
    deleteStudent
  } = useStudentContext()


  const filteredStudents = students.filter(student =>
    student.name
      .toLowerCase()
      .includes(search.toLowerCase()) &&
    (
      branchFilter === '' ||
      student.branch === branchFilter
    )
  )


  return (

    <Container
      maxWidth="lg"
      sx={{ py: 5 }}
    >

      {/* Existing Students */}

      <section className="student-section">

        <h2>Students</h2>


        {/* Search and Branch Filter */}

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: 3,
            flexWrap: 'wrap'
          }}
        >

          <TextField
            label="Search Student"
            placeholder="Enter student name"
            value={search}
            onChange={e => setSearch(e.target.value)}
            size="small"
            sx={{
              flex: 1,
              minWidth: 220
            }}
          />


          <FormControl
            size="small"
            sx={{
              minWidth: 180
            }}
          >

            <InputLabel>
              Branch
            </InputLabel>


            <Select
              value={branchFilter}
              label="Branch"
              onChange={e =>
                setBranchFilter(e.target.value)
              }
            >

              <MenuItem value="">
                All Branches
              </MenuItem>

              <MenuItem value="CSE">
                CSE
              </MenuItem>

              <MenuItem value="IT">
                IT
              </MenuItem>

              <MenuItem value="ECE">
                ECE
              </MenuItem>

              <MenuItem value="Mechanical">
                Mechanical
              </MenuItem>

              <MenuItem value="Civil">
                Civil
              </MenuItem>

            </Select>

          </FormControl>

        </Box>


        {/* Student Cards */}

        <div className="student-list">

          {filteredStudents.map(student => (

            <StudentCard

              key={student.id}

              name={student.name}

              email={student.email}

              phone={student.phone}

              rollNumber={student.rollNumber}

              branch={student.branch}

              year={student.year}

              gender={student.gender}

              city={student.city}

              state={student.state}

              onEdit={() =>
                navigate(
                  `/add-student/${student.id}`
                )
              }

              onDelete={() =>
                deleteStudent(student.id)
              }

              onView={()=>{
                navigate(`/students/${student.id}`)
              }}

            />

          ))}

        </div>

      </section>


      {/* API Students */}

      <section className="student-section">

        <h2>API Students</h2>


        {loading && (
          <p>Loading students...</p>
        )}


        {error && (
          <p>{error}</p>
        )}


        <div className="student-list">

          {apiStudents.map(student => (

            <StudentCard

              key={student.id}

              name={student.name}

              email={student.email}

              phone={student.phone}

              rollNumber={student.rollNumber}

              branch={student.branch}

              year={student.year}

              gender={student.gender}

              city={student.city}

              state={student.state}

              onEdit={() => { }}

              onDelete={() => { }}

              onView={()=>{}}

            />

          ))}

        </div>

      </section>

    </Container>

  )
}

export default Students