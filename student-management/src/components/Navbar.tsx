import { Link } from 'react-router-dom'

import AppBar from './ui/AppBar'
import Toolbar from './ui/Toolbar'
import Typography from '../components/ui/Typography'
import Button from '../components/ui/Button'
import Box from '../components/ui/Box'

import DashboardIcon from '@mui/icons-material/Dashboard'
import SchoolIcon from '@mui/icons-material/School'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

interface NavbarProps {
  title: string
}

function Navbar({ title }: NavbarProps) {

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        color: '#1f2937',
        borderBottom: '1px solid #e5e7eb'
      }}
    >

      <Toolbar
        sx={{
          minHeight: '72px',
          px: { xs: 2, md: 5 }
        }}
      >

        {/* Logo / Title */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            flexGrow: 1
          }}
        >

          <SchoolIcon
            sx={{
              fontSize: 34,
              color: '#2563eb'
            }}
          />

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: '0.3px'
            }}
          >
            {title}
          </Typography>

        </Box>

        {/* Navigation */}
        <Box
          sx={{
            display: 'flex',
            gap: 1
          }}
        >

          <Button
            component={Link}
            to="/"
            startIcon={<DashboardIcon />}
            sx={{
              color: '#374151',
              textTransform: 'none',
              fontWeight: 600,
              px: 2,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#eff6ff',
                color: '#2563eb'
              }
            }}
          >
            Dashboard
          </Button>

          <Button
            component={Link}
            to="/students"
            startIcon={<SchoolIcon />}
            sx={{
              color: '#374151',
              textTransform: 'none',
              fontWeight: 600,
              px: 2,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#eff6ff',
                color: '#2563eb'
              }
            }}
          >
            Students
          </Button>


          <Button
            component={Link}
            to="/add-student"
            startIcon={<PersonAddIcon />}
            sx={{
              color: '#374151',
              textTransform: 'none',
              fontWeight: 600,
              px: 2,
              borderRadius: 2,
              '&:hover': {
                backgroundColor: '#eff6ff',
                color: '#2563eb'
              }
            }}
          >
            Add Student
          </Button>

        </Box>

      </Toolbar>

    </AppBar>
  )
}

export default Navbar