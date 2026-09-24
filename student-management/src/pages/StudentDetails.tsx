import { useParams, useNavigate } from 'react-router-dom'
import { useStudentContext } from '../context/StudentContext'

import { Avatar } from '@mui/material'

import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import CardContent from '../components/ui/CardContent'
import Box from '../components/ui/Box'
import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import Typography from '../components/ui/Typography'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import BadgeIcon from '@mui/icons-material/Badge'
import SchoolIcon from '@mui/icons-material/School'
import PersonIcon from '@mui/icons-material/Person'
import CakeIcon from '@mui/icons-material/Cake'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import MapIcon from '@mui/icons-material/Map'
import PinDropIcon from '@mui/icons-material/PinDrop'


function StudentDetails() {

  const { id } = useParams()

  const navigate = useNavigate()

  const { students } = useStudentContext()

  const student = students.find(
    student => student.id === Number(id)
  )


  // Student not found

  if (!student) {

    return (
      <Container
        maxWidth="md"
        sx={{
          py: 8
        }}
      >

        <Card
          elevation={0}
          sx={{
            borderRadius: 3,
            textAlign: 'center'
          }}
        >

          <CardContent
            sx={{
              p: 5
            }}
          >

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 1
              }}
            >
              Student not found
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mb: 3
              }}
            >
              The student you are looking for does not exist.
            </Typography>

            <Button
              startIcon={<ArrowBackIcon />}
              variant="contained"
              onClick={() => navigate('/students')}
              sx={{
                textTransform: 'none',
                borderRadius: 2
              }}
            >
              Back to Students
            </Button>

          </CardContent>

        </Card>

      </Container>
    )
  }


  return (

    <Container
      maxWidth="md"
      sx={{
        py: 5
      }}
    >

      {/* Back Button */}

      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/students')}
        sx={{
          mb: 3,
          textTransform: 'none'
        }}
      >
        Back to Students
      </Button>


      <Card
        elevation={0}
        sx={{
          borderRadius: 3,
          overflow: 'hidden'
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


          {/* Profile Header */}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              mb: 4,

              flexDirection: {
                xs: 'column',
                sm: 'row'
              },

              textAlign: {
                xs: 'center',
                sm: 'left'
              }
            }}
          >

            <Avatar
              src={student.avatar}
              alt={student.name}
              sx={{
                width: 110,
                height: 110,
                fontSize: 40
              }}
            />

            <Box>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 0.5
                }}
              >
                {student.name}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mb: 1
                }}
              >
                Student Profile
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',

                  justifyContent: {
                    xs: 'center',
                    sm: 'flex-start'
                  }
                }}
              >

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    backgroundColor: '#f3f4f6',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2
                  }}
                >
                  {student.branch}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    backgroundColor: '#f3f4f6',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2
                  }}
                >
                  {student.year}
                </Typography>

              </Box>

            </Box>

          </Box>


          <Divider sx={{ mb: 4 }} />


          {/* Academic Information */}

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2
            }}
          >
            Academic Information
          </Typography>


          <Box
            sx={{
              display: 'grid',

              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr'
              },

              gap: 2,
              mb: 4
            }}
          >

            <InfoItem
              icon={<BadgeIcon />}
              label="Roll Number"
              value={student.rollNumber}
            />

            <InfoItem
              icon={<SchoolIcon />}
              label="Branch"
              value={student.branch}
            />

            <InfoItem
              icon={<SchoolIcon />}
              label="Year"
              value={student.year}
            />

          </Box>


          <Divider sx={{ mb: 4 }} />


          {/* Personal Information */}

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2
            }}
          >
            Personal Information
          </Typography>


          <Box
            sx={{
              display: 'grid',

              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr'
              },

              gap: 2,
              mb: 4
            }}
          >

            <InfoItem
              icon={<PersonIcon />}
              label="Gender"
              value={student.gender}
            />

            <InfoItem
              icon={<CakeIcon />}
              label="Date of Birth"
              value={student.dateOfBirth}
            />

          </Box>


          <Divider sx={{ mb: 4 }} />


          {/* Contact Information */}

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 2
            }}
          >
            Contact Information
          </Typography>


          <Box
            sx={{
              display: 'grid',

              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr'
              },

              gap: 2
            }}
          >

            <InfoItem
              icon={<EmailIcon />}
              label="Email"
              value={student.email}
            />

            <InfoItem
              icon={<PhoneIcon />}
              label="Phone"
              value={student.phone}
            />

            <InfoItem
              icon={<LocationCityIcon />}
              label="City"
              value={student.city}
            />

            <InfoItem
              icon={<MapIcon />}
              label="State"
              value={student.state}
            />

            <InfoItem
              icon={<PinDropIcon />}
              label="Pincode"
              value={student.pincode}
            />

          </Box>

        </CardContent>

      </Card>

    </Container>
  )
}


/*
  Reusable component for displaying
  one student detail.
*/

interface InfoItemProps {
  icon: React.ReactNode
  label: string
  value: string
}


function InfoItem({
  icon,
  label,
  value
}: InfoItemProps) {

  return (

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,

        p: 2,
        borderRadius: 2,

        backgroundColor: '#fafafa'
      }}
    >

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',

          color: 'text.secondary'
        }}
      >
        {icon}
      </Box>

      <Box>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {label}
        </Typography>

        <Typography
          sx={{
            fontWeight: 600
          }}
        >
          {value}
        </Typography>

      </Box>

    </Box>
  )
}


export default StudentDetails