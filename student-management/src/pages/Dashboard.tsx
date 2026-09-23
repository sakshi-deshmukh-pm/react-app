import { useStudentContext } from '../context/StudentContext'

import Container from '../components/ui/Container'
import Typography from '../components/ui/Typography'
import Card from '../components/ui/Card'
import CardContent from '../components/ui/CardContent'
import Grid from '@mui/material/Grid'
import Box from '../components/ui/Box'

import PeopleIcon from '@mui/icons-material/People'
import ComputerIcon from '@mui/icons-material/Computer'
import CodeIcon from '@mui/icons-material/Code'

function Dashboard() {

  const { students } = useStudentContext()

  const totalStudents = students.length

  const cseStudents = students.filter(
    student => student.branch === 'CSE'
  ).length

  const itStudents = students.filter(
    student => student.branch === 'IT'
  ).length

  const branchCounts = students.reduce(
    (counts, student) => {
      counts[student.branch] =
        (counts[student.branch] || 0) + 1

      return counts
    },
    {} as Record<string, number>
  )

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 5 }}
    >

      {/* Header */}

      <Box sx={{ mb: 5 }}>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1
          }}
        >
          Student Management System
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
        >
          Manage students and their information easily.
        </Typography>

      </Box>


      {/* Statistics Cards */}

      <Grid container spacing={3}>

        {/* Total Students */}

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>

          <Card
            elevation={0}
            sx={{
              border: '1px solid #e5e7eb',
              borderRadius: 3,
              transition: '0.3s',

              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow:
                  '0 10px 25px rgba(0,0,0,0.08)'
              }
            }}
          >

            <CardContent>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 3
                }}
              >

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontWeight: 600 }}
                >
                  Total Students
                </Typography>

                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: '#eff6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >

                  <PeopleIcon
                    sx={{
                      color: '#2563eb',
                      fontSize: 28
                    }}
                  />

                </Box>

              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700
                }}
              >
                {totalStudents}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                Students registered
              </Typography>

            </CardContent>

          </Card>

        </Grid>


        {/* CSE Students */}

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>

          <Card
            elevation={0}
            sx={{
              border: '1px solid #e5e7eb',
              borderRadius: 3,
              transition: '0.3s',

              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow:
                  '0 10px 25px rgba(0,0,0,0.08)'
              }
            }}
          >

            <CardContent>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 3
                }}
              >

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontWeight: 600 }}
                >
                  CSE Students
                </Typography>

                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: '#f0fdf4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >

                  <ComputerIcon
                    sx={{
                      color: '#16a34a',
                      fontSize: 28
                    }}
                  />

                </Box>

              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700
                }}
              >
                {cseStudents}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                Computer Science
              </Typography>

            </CardContent>

          </Card>

        </Grid>


        {/* IT Students */}

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>

          <Card
            elevation={0}
            sx={{
              border: '1px solid #e5e7eb',
              borderRadius: 3,
              transition: '0.3s',

              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow:
                  '0 10px 25px rgba(0,0,0,0.08)'
              }
            }}
          >

            <CardContent>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 3
                }}
              >

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontWeight: 600 }}
                >
                  IT Students
                </Typography>

                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: '#fff7ed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >

                  <CodeIcon
                    sx={{
                      color: '#ea580c',
                      fontSize: 28
                    }}
                  />

                </Box>

              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700
                }}
              >
                {itStudents}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                Information Technology
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>


      {/* Branch Distribution */}

      <Card
        elevation={0}
        sx={{
          mt: 4,
          border: '1px solid #e5e7eb',
          borderRadius: 3
        }}
      >

        <CardContent>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              mb: 3
            }}
          >
            Branch Distribution
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >

            {Object.entries(branchCounts).map(
              ([branch, count]) => (

                <Box
                  key={branch}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >

                  <Typography>
                    {branch}
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: 700
                    }}
                  >
                    {count}
                  </Typography>

                </Box>

              )
            )}

          </Box>

        </CardContent>

      </Card>

    </Container>
  )
}

export default Dashboard