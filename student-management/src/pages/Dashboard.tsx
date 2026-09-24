import { useStudentContext } from '../context/StudentContext'

import Container from '../components/ui/Container'
import Typography from '../components/ui/Typography'
import Card from '../components/ui/Card'
import CardContent from '../components/ui/CardContent'
import Grid from '../components/ui/Grid'
import Box from '../components/ui/Box'

import PeopleIcon from '@mui/icons-material/People'
import ComputerIcon from '@mui/icons-material/Computer'
import CodeIcon from '@mui/icons-material/Code'
import SchoolIcon from '@mui/icons-material/School'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import { useNavigate } from 'react-router-dom'

function Dashboard() {

  const { students } = useStudentContext()

  const navigate = useNavigate()

  const totalStudents = students.length

  const cseStudents = students.filter(
    student => student.branch === 'CSE'
  ).length

  const itStudents = students.filter(
    student => student.branch === 'IT'
  ).length

  const otherStudents =
    totalStudents - cseStudents - itStudents


  /* Branch counts */

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
      sx={{
        py: {
          xs: 3,
          md: 5
        }
      }}
    >

      {/* ================= HEADER ================= */}

      <Box
        sx={{
          mb: 5,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: {
            xs: 'flex-start',
            md: 'center'
          },
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          gap: 2
        }}
      >

        <Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.5px',
              mb: 1
            }}
          >
            Dashboard
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
          >
            Welcome back! Here's an overview of your students.
          </Typography>

        </Box>


        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 2,
            py: 1,
            borderRadius: 2,
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0'
          }}
        >

          <SchoolIcon
            sx={{
              color: '#2563eb',
              fontSize: 20
            }}
          />

          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: '#475569'
            }}
          >
            Student Management
          </Typography>

        </Box>

      </Box>


      {/* ================= STATISTICS ================= */}

      <Grid
        container
        spacing={3}
      >

        {/* TOTAL */}

        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 3
          }}
        >

          <Card
            elevation={0}
            sx={{
              height: '100%',
              borderRadius: 4,
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              position: 'relative',
              transition: 'all 0.3s ease',

              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow:
                  '0 15px 35px rgba(37,99,235,0.12)'
              }
            }}
          >

            <Box
              sx={{
                height: 4,
                background:
                  'linear-gradient(90deg,#2563eb,#60a5fa)'
              }}
            />

            <CardContent sx={{ p: 3 }}>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}
              >

                <Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Total Students
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: '#0f172a'
                    }}
                  >
                    {totalStudents}
                  </Typography>

                </Box>

                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 3,
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
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2 }}
              >
                All registered students
              </Typography>

            </CardContent>

          </Card>

        </Grid>


        {/* CSE */}

        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 3
          }}
        >

          <Card
            elevation={0}
            sx={{
              height: '100%',
              borderRadius: 4,
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              transition: 'all 0.3s ease',

              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow:
                  '0 15px 35px rgba(22,163,74,0.12)'
              }
            }}
          >

            <Box
              sx={{
                height: 4,
                background:
                  'linear-gradient(90deg,#16a34a,#4ade80)'
              }}
            />

            <CardContent sx={{ p: 3 }}>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}
              >

                <Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    CSE Students
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: '#0f172a'
                    }}
                  >
                    {cseStudents}
                  </Typography>

                </Box>

                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 3,
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
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2 }}
              >
                Computer Science
              </Typography>

            </CardContent>

          </Card>

        </Grid>


        {/* IT */}

        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 3
          }}
        >

          <Card
            elevation={0}
            sx={{
              height: '100%',
              borderRadius: 4,
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              transition: 'all 0.3s ease',

              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow:
                  '0 15px 35px rgba(234,88,12,0.12)'
              }
            }}
          >

            <Box
              sx={{
                height: 4,
                background:
                  'linear-gradient(90deg,#ea580c,#fb923c)'
              }}
            />

            <CardContent sx={{ p: 3 }}>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}
              >

                <Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    IT Students
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: '#0f172a'
                    }}
                  >
                    {itStudents}
                  </Typography>

                </Box>

                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 3,
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
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2 }}
              >
                Information Technology
              </Typography>

            </CardContent>

          </Card>

        </Grid>


        {/* OTHER */}

        <Grid
          size={{
            xs: 12,
            sm: 6,
            md: 3
          }}
        >

          <Card
            elevation={0}
            sx={{
              height: '100%',
              borderRadius: 4,
              border: '1px solid #e2e8f0',
              overflow: 'hidden',
              transition: 'all 0.3s ease',

              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow:
                  '0 15px 35px rgba(124,58,237,0.12)'
              }
            }}
          >

            <Box
              sx={{
                height: 4,
                background:
                  'linear-gradient(90deg,#7c3aed,#a78bfa)'
              }}
            />

            <CardContent sx={{ p: 3 }}>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start'
                }}
              >

                <Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    Other Branches
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: '#0f172a'
                    }}
                  >
                    {otherStudents}
                  </Typography>

                </Box>

                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 3,
                    backgroundColor: '#f5f3ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >

                  <SchoolIcon
                    sx={{
                      color: '#7c3aed',
                      fontSize: 28
                    }}
                  />

                </Box>

              </Box>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2 }}
              >
                Other departments
              </Typography>

            </CardContent>

          </Card>

        </Grid>

      </Grid>


      {/* ================= LOWER SECTION ================= */}

      <Grid
        container
        spacing={3}
        sx={{ mt: 1 }}
      >

        {/* Branch Distribution */}

        <Grid
          size={{
            xs: 12,
            md: 7
          }}
        >

          <Card
            elevation={0}
            sx={{
              height: '100%',
              borderRadius: 4,
              border: '1px solid #e2e8f0'
            }}
          >

            <CardContent sx={{ p: 3 }}>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 0.5
                }}
              >
                Branch Distribution
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Students grouped by their branch
              </Typography>


              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3
                }}
              >

                {Object.entries(branchCounts).map(
                  ([branch, count]) => {

                    const percentage =
                      totalStudents > 0
                        ? (count / totalStudents) * 100
                        : 0

                    return (

                      <Box key={branch}>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 1
                          }}
                        >

                          <Typography
                            variant="body2"
                            sx={{
                              fontWeight: 600
                            }}
                          >
                            {branch}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            {count} students
                          </Typography>

                        </Box>

                        <Box
                          sx={{
                            width: '100%',
                            height: 8,
                            borderRadius: 10,
                            backgroundColor: '#f1f5f9',
                            overflow: 'hidden'
                          }}
                        >

                          <Box
                            sx={{
                              width: `${percentage}%`,
                              height: '100%',
                              borderRadius: 10,
                              background:
                                'linear-gradient(90deg,#2563eb,#60a5fa)',
                              transition:
                                'width 0.5s ease'
                            }}
                          />

                        </Box>

                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{
                            display: 'block',
                            mt: 0.5
                          }}
                        >
                          {percentage.toFixed(0)}%
                        </Typography>

                      </Box>

                    )

                  }
                )}

              </Box>

            </CardContent>

          </Card>

        </Grid>


        {/* Recent Students */}

        <Grid
          size={{
            xs: 12,
            md: 5
          }}
        >

          <Card
            elevation={0}
            sx={{
              height: '100%',
              borderRadius: 4,
              border: '1px solid #e2e8f0'
            }}
          >

            <CardContent sx={{ p: 3 }}>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3
                }}
              >

                <Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700
                    }}
                  >
                    Students
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Recently added
                  </Typography>

                </Box>

                <Typography
                  variant="body2"
                  onClick={() => navigate('/students')}
                  sx={{
                    color: '#2563eb',
                    fontWeight: 600,
                    cursor: 'pointer',

                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  View All
                </Typography>

              </Box>


              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}
              >

                {students
                  .slice(-5)
                  .reverse()
                  .map(student => (

                    <Box
                      key={student.id}
                      onClick={() =>
                        navigate(
                          `/students/${student.id}`
                        )
                      }
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 1.5,
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: '0.2s',

                        '&:hover': {
                          backgroundColor: '#f8fafc'
                        }
                      }}
                    >

                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: '50%',
                          backgroundColor: '#eff6ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >

                        <Typography
                          sx={{
                            fontWeight: 700,
                            color: '#2563eb'
                          }}
                        >
                          {student.name
                            .charAt(0)
                            .toUpperCase()}
                        </Typography>

                      </Box>


                      <Box
                        sx={{
                          minWidth: 0,
                          flex: 1
                        }}
                      >

                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {student.name}
                        </Typography>

                        <Typography
                          variant="caption"
                          color="text.secondary"
                        >
                          {student.branch} • {student.year}
                        </Typography>

                      </Box>


                      <ArrowForwardIcon
                        sx={{
                          fontSize: 18,
                          color: '#94a3b8'
                        }}
                      />

                    </Box>

                  ))}

              </Box>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

    </Container>
  )
}

export default Dashboard
