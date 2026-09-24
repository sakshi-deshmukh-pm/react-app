import Button from "../components/ui/Button"
import CardContent from "../components/ui/CardContent"
import Card from "../components/ui/Card"
import Typography from "../components/ui/Typography"
import Box from "../components/ui/Box"
import Divider from "../components/ui/Divider"

import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import SchoolIcon from "@mui/icons-material/School"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import Avatar from "@mui/material/Avatar"

interface StudentCardProp {
  name: string
  email: string
  phone: string
  rollNumber: string
  branch: string
  year: string
  gender: string
  city: string
  state: string
  avatar: string
  onEdit: () => void
  onDelete: () => void
  onView: () => void
  profile?: () => void
}

function StudentCard({
  name,
  email,
  phone,
  rollNumber,
  branch,
  year,
  gender,
  city,
  state,
  avatar,
  onEdit,
  onDelete,
  onView
}: StudentCardProp) {

  const studentAvatar =
    avatar && avatar.startsWith('/avatars/')
      ? avatar
      : '/avatars/student1.webp'

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        height: '100%',
        transition: '0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
        }
      }}
    >
      <CardContent>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            mb: 2
          }}
        >
          <Avatar
            src={studentAvatar}
            alt={name}
            sx={{
              width: 45,
              height: 45
            }}
          />

          <Typography
            variant="h6"
            sx={{ fontWeight: 700 }}
          >
            {name}
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 1.5
          }}
        >
          <EmailIcon
            fontSize="small"
            sx={{ color: '#6b7280' }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {email}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 1.5
          }}
        >
          <PhoneIcon
            fontSize="small"
            sx={{ color: '#6b7280' }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {phone}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 1.5
          }}
        >
          <SchoolIcon
            fontSize="small"
            sx={{ color: '#6b7280' }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Roll Number: {rollNumber}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 1.5
          }}
        >
          <SchoolIcon
            fontSize="small"
            sx={{ color: '#6b7280' }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Branch: {branch}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 1.5
          }}
        >
          <CalendarMonthIcon
            fontSize="small"
            sx={{ color: '#6b7280' }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {year}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 1.5
          }}
        >
          <PersonIcon
            fontSize="small"
            sx={{ color: '#6b7280' }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {gender}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mb: 2
          }}
        >
          <LocationOnIcon
            fontSize="small"
            sx={{ color: '#6b7280' }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {city}, {state}
          </Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5
          }}
        >

          <Button
            variant="outlined"
            onClick={onView}
            sx={{
              textTransform: 'none',
              borderRadius: 2
            }}
          >
            View Details
          </Button>

          <Box
            sx={{
              display: 'flex',
              gap: 1.5
            }}
          >

            <Button
              variant="contained"
              onClick={onEdit}
              sx={{
                textTransform: 'none',
                flex: 1,
                borderRadius: 2
              }}
            >
              Edit
            </Button>

            <Button
              variant="outlined"
              color="error"
              onClick={onDelete}
              sx={{
                textTransform: 'none',
                flex: 1,
                borderRadius: 2
              }}
            >
              Delete
            </Button>

          </Box>

        </Box>

      </CardContent>
    </Card>
  )
}

export default StudentCard


