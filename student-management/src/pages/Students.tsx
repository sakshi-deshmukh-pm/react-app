import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import StudentCard from '../components/StudentCard'

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
import Typography from '../components/ui/Typography'


function Students() {

  const navigate = useNavigate()

  const {
    students,
    loading,
    error,
    deleteStudent
  } = useStudentContext()


  const [search, setSearch] = useState('')

  const [branchFilter, setBranchFilter] = useState('')


  // Search + Branch Filter

  const filteredStudents = students.filter(student =>
    student.name
      .toLowerCase()
      .includes(search.toLowerCase()) &&
    (
      branchFilter === '' ||
      student.branch === branchFilter
    )
  )


  // Separate students for visual display

  const regularStudents = filteredStudents.filter(
    student => student.id < 1000
  )

  const apiStudents = filteredStudents.filter(
    student => student.id >= 1000
  )


  return (

    <Container
      maxWidth="lg"
      sx={{
        py: 5
      }}
    >

      {/* Page Heading */}

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 4
        }}
      >
        Students
      </Typography>


      {/* Search + Branch Filter */}

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mb: 5,
          flexWrap: 'wrap'
        }}
      >

        <TextField
          label="Search Student"
          placeholder="Enter student name"
          value={search}
          onChange={e =>
            setSearch(e.target.value)
          }
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


      {/* Loading */}

      {loading && (
        <Typography
          color="text.secondary"
          sx={{
            mb: 3
          }}
        >
          Loading students...
        </Typography>
      )}


      {/* Error */}

      {error && (
        <Typography
          color="error"
          sx={{
            mb: 3
          }}
        >
          {error}
        </Typography>
      )}


      {/* ========================= */}
      {/* Regular Students */}
      {/* ========================= */}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 3
        }}
      >

        {/* Accent Line */}

        <Box
          sx={{
            width: 6,
            height: 32,
            borderRadius: 2,
            bgcolor: 'primary.main'
          }}
        />


        <Typography
          variant="h5"
          sx={{
            fontWeight: 700
          }}
        >
          Regular Students
        </Typography>


        {/* Student Count */}

        <Box
          sx={{
            px: 1.5,
            py: 0.5,
            borderRadius: 5,
            bgcolor: '#e8f0fe',
            color: 'primary.main',
            fontWeight: 600,
            fontSize: 14
          }}
        >
          {regularStudents.length}
        </Box>

      </Box>


      {/* Regular Student Cards */}

      <div className="student-list">

        {regularStudents.map(student => (

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
            avatar={student.avatar}

            onEdit={() =>
              navigate(
                `/add-student/${student.id}`
              )
            }

            onDelete={() =>
              deleteStudent(student.id)
            }

            onView={() =>
              navigate(
                `/students/${student.id}`
              )
            }
          />

        ))}

      </div>


      {/* ========================= */}
      {/* API Students */}
      {/* ========================= */}

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 3,
          mt: 7
        }}
      >

        {/* Accent Line */}

        <Box
          sx={{
            width: 6,
            height: 32,
            borderRadius: 2,
            bgcolor: 'secondary.main'
          }}
        />


        <Typography
          variant="h5"
          sx={{
            fontWeight: 700
          }}
        >
          API Students
        </Typography>


        {/* Student Count */}

        <Box
          sx={{
            px: 1.5,
            py: 0.5,
            borderRadius: 5,
            bgcolor: '#f3e8ff',
            color: 'secondary.main',
            fontWeight: 600,
            fontSize: 14
          }}
        >
          {apiStudents.length}
        </Box>

      </Box>


      {/* API Student Cards */}

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
            avatar={student.avatar}

            onEdit={() =>
              navigate(
                `/add-student/${student.id}`
              )
            }

            onDelete={() =>
              deleteStudent(student.id)
            }

            onView={() =>
              navigate(
                `/students/${student.id}`
              )
            }
          />

        ))}

      </div>

    </Container>
  )
}


export default Students
