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

import Container from '../components/ui/Container'
import Typography from '../components/ui/Typography'
import TextField from '../components/ui/TextField'
import FormControl from '../components/ui/FormControl'
import InputLabel from '../components/ui/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '../components/ui/MenuItem'
import Button from '../components/ui/Button'
import Box from '../components/ui/Box'
import Card from '../components/ui/Card'
import CardContent from '../components/ui/CardContent'
import Grid from '../components/ui/Grid'


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
  const [phone, setPhone] = useState('')
  const [rollNumber, setRollNumber] = useState('')
  const [branch, setBranch] = useState('')
  const [year, setYear] = useState('')
  const [gender, setGender] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')


  useEffect(() => {

    if (student) {

      setName(student.name)
      setEmail(student.email)
      setPhone(student.phone)
      setRollNumber(student.rollNumber)
      setBranch(student.branch)
      setYear(student.year)
      setGender(student.gender)
      setDateOfBirth(student.dateOfBirth)
      setCity(student.city)
      setState(student.state)
      setPincode(student.pincode)

    }

  }, [student])


  function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault()


    if (!/^[A-Za-z ]+$/.test(name)) {

      alert(
        'Name should contain only letters and spaces'
      )

      return
    }


    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

      alert(
        'Please enter a valid email address'
      )

      return
    }


    if (!/^\d{10}$/.test(phone)) {

      alert(
        'Phone number must contain exactly 10 digits'
      )

      return
    }


    if (!/^[A-Za-z]+[0-9]{7}$/.test(rollNumber)) {

      alert(
        'Roll number must contain branch letters followed by 7 digits'
      )

      return
    }


    const duplicateRollNumber = students.some(
      student =>
        student.rollNumber === rollNumber &&
        student.id !== editId
    )


    if (duplicateRollNumber) {

      alert(
        'Roll number already exists'
      )

      return
    }


    if (!branch) {

      alert(
        'Please select a branch'
      )

      return
    }


    if (!year) {

      alert(
        'Please select a year'
      )

      return
    }


    if (!gender) {

      alert(
        'Please select a gender'
      )

      return
    }


    const today = new Date()

    const dob = new Date(dateOfBirth)


    if (dob > today) {

      alert(
        'Date of birth cannot be in the future'
      )

      return
    }


    if (!/^[A-Za-z ]+$/.test(city)) {

      alert(
        'City should contain only letters and spaces'
      )

      return
    }


    if (!/^[A-Za-z ]+$/.test(state)) {

      alert(
        'State should contain only letters and spaces'
      )

      return
    }


    if (!/^\d{6}$/.test(pincode)) {

      alert(
        'Pincode must contain exactly 6 digits'
      )

      return
    }


    if (
      !name ||
      !email ||
      !phone ||
      !rollNumber ||
      !branch ||
      !year ||
      !gender ||
      !dateOfBirth ||
      !city ||
      !state ||
      !pincode
    ) {

      alert(
        'Please fill all fields'
      )

      return
    }


    const studentData = {

      name,
      email,
      phone,
      rollNumber,
      branch,
      year,
      gender,
      dateOfBirth,
      city,
      state,
      pincode

    }


    if (
      editId !== null &&
      student
    ) {

      editStudent(
        editId,
        studentData
      )

    } else {

      addStudent(
        studentData
      )

    }


    navigate('/students')

  }


  return (

    <Container
      maxWidth="md"
      sx={{
        py: 5
      }}
    >

      <Card
        elevation={0}
        sx={{
          border: '1px solid #e5e7eb',
          borderRadius: 3
        }}
      >

        <CardContent
          sx={{
            p: {
              xs: 3,
              md: 5
            }
          }}
        >

          {/* Heading */}

          <Box
            sx={{
              mb: 4
            }}
          >

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 1
              }}
            >
              {editId
                ? 'Edit Student'
                : 'Add Student'
              }
            </Typography>


            <Typography
              variant="body1"
              color="text.secondary"
            >
              {editId
                ? 'Update the student information below.'
                : 'Enter the student information below.'
              }
            </Typography>

          </Box>


          {/* Form */}

          <Box
            component="form"
            onSubmit={handleSubmit}
          >

            <Grid
              container
              spacing={2.5}
            >

              {/* Name */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}
              >

                <TextField
                  fullWidth
                  label="Student Name"
                  value={name}
                  onChange={
                    e => setName(e.target.value)
                  }
                />

              </Grid>


              {/* Email */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}
              >

                <TextField
                  fullWidth
                  type="email"
                  label="Email"
                  value={email}
                  onChange={
                    e => setEmail(e.target.value)
                  }
                />

              </Grid>


              {/* Phone */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}
              >

                <TextField
                  fullWidth
                  label="Phone Number"
                  value={phone}
                  onChange={
                    e => setPhone(e.target.value)
                  }
                />

              </Grid>


              {/* Roll Number */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}
              >

                <TextField
                  fullWidth
                  label="Roll Number"
                  value={rollNumber}
                  onChange={
                    e => setRollNumber(e.target.value)
                  }
                />

              </Grid>


              {/* Branch */}

              <Grid
                size={{
                  xs: 12,
                  sm: 4
                }}
              >

                <FormControl fullWidth>

                  <InputLabel>
                    Branch
                  </InputLabel>

                  <Select
                    value={branch}
                    label="Branch"
                    onChange={
                      e => setBranch(e.target.value)
                    }
                  >

                    <MenuItem value="">
                      Select Branch
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

              </Grid>


              {/* Year */}

              <Grid
                size={{
                  xs: 12,
                  sm: 4
                }}
              >

                <FormControl fullWidth>

                  <InputLabel>
                    Year
                  </InputLabel>

                  <Select
                    value={year}
                    label="Year"
                    onChange={
                      e => setYear(e.target.value)
                    }
                  >

                    <MenuItem value="">
                      Select Year
                    </MenuItem>

                    <MenuItem value="1st Year">
                      1st Year
                    </MenuItem>

                    <MenuItem value="2nd Year">
                      2nd Year
                    </MenuItem>

                    <MenuItem value="3rd Year">
                      3rd Year
                    </MenuItem>

                    <MenuItem value="4th Year">
                      4th Year
                    </MenuItem>

                  </Select>

                </FormControl>

              </Grid>


              {/* Gender */}

              <Grid
                size={{
                  xs: 12,
                  sm: 4
                }}
              >

                <FormControl fullWidth>

                  <InputLabel>
                    Gender
                  </InputLabel>

                  <Select
                    value={gender}
                    label="Gender"
                    onChange={
                      e => setGender(e.target.value)
                    }
                  >

                    <MenuItem value="">
                      Select Gender
                    </MenuItem>

                    <MenuItem value="Male">
                      Male
                    </MenuItem>

                    <MenuItem value="Female">
                      Female
                    </MenuItem>

                    <MenuItem value="Other">
                      Other
                    </MenuItem>

                  </Select>

                </FormControl>

              </Grid>


              {/* Date of Birth */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}
              >

                <TextField
                  fullWidth
                  type="date"
                  label="Date of Birth"
                  value={dateOfBirth}
                  onChange={
                    e => setDateOfBirth(e.target.value)
                  }
                  slotProps={{
                    inputLabel: {
                      shrink: true
                    }
                  }}
                />

              </Grid>


              {/* City */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}
              >

                <TextField
                  fullWidth
                  label="City"
                  value={city}
                  onChange={
                    e => setCity(e.target.value)
                  }
                />

              </Grid>


              {/* State */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}
              >

                <TextField
                  fullWidth
                  label="State"
                  value={state}
                  onChange={
                    e => setState(e.target.value)
                  }
                />

              </Grid>


              {/* Pincode */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6
                }}
              >

                <TextField
                  fullWidth
                  label="Pincode"
                  value={pincode}
                  onChange={
                    e => setPincode(e.target.value)
                  }
                />

              </Grid>


              {/* Submit Button */}

              <Grid
                size={{
                  xs: 12
                }}
              >

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mt: 2
                  }}
                >

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      textTransform: 'none',
                      px: 4,
                      py: 1.2,
                      borderRadius: 2,
                      fontWeight: 600
                    }}
                  >
                    {editId
                      ? 'Update Student'
                      : 'Add Student'
                    }
                  </Button>

                </Box>

              </Grid>

            </Grid>

          </Box>

        </CardContent>

      </Card>

    </Container>

  )
}

export default AddStudent
