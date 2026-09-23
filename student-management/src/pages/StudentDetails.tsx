import {useParams,useNavigate} from 'react-router-dom'
import { useStudentContext } from '../context/StudentContext'

import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import CardContent from '../components/ui/CardContent'
import Box from '../components/ui/Box'
import  Button  from '../components/ui/Button'
import Divider from "../components/ui/Divider"

import ArrowBackIcon  from '@mui/icons-material/ArrowBack'
import Typography from '../components/ui/Typography'

function StudentDetails(){

    const {id}=useParams()
    const navigate=useNavigate()

    const {students}=useStudentContext()

    const student=students.find(
        student=>student.id===Number(id)
    )

    if(!student){
        return(
            <Container sx={{py:5}}>

                <Typography variant="h5">
                 Student not found
                </Typography>
 
            <Button
            startIcon={<ArrowBackIcon/>}
            onClick={()=>navigate('/students')}
            sx={{
                mt:2,
                textTransform:'none'
            }}
            >
            Back to Students
            </Button>
            </Container>
        )
    }

    return(
        <Container
        maxWidth="md"
        sx={{py:5}}
        >
            <Button
            startIcon={<ArrowBackIcon/>}
            onClick={()=>navigate('/students')}
            sx={{
                mb:3,
                textTransform:'none'
            }}
            >
               Back to Students
            </Button>
        
        <Card
        elevation={0}
        sx={{
            border:'1px solid #e5e7eb',
            borderRadius:3
        }}
        >

        <CardContent
        sx={{
            p:{xs:3,md:5}
        }}>


        <Typography
        variant="h4"
        sx={{
            fontWeight:700,
            mb:1
        }}
        >
         {student.name}
        </Typography>

        <Typography
        color="text.secondary"
        sx={{
            mb:3
        }}
        >
         Student Details
        </Typography>

        <Divider sx={{mb:3}}/>

        <Box
        sx={{
            display:'grid',
            gridTemplateColumns:{
                xs:'1fr',
                sm:'1fr 1fr'
            },
            gap:3
        }}
        >
        
        <Box>
            <Typography variant="body2" color='text.secondary'>
                Email
            </Typography>
            <Typography sx={{fontWeight:600}}>
             {student.email}
            </Typography>
        </Box>

        <Box>
            <Typography variant="body2" color='text.secondary'>
                Phone
            </Typography>
            <Typography sx={{fontWeight:600}}>
             {student.phone}
            </Typography>
        </Box>

        <Box>
            <Typography variant="body2" color='text.secondary'>
                Roll Number
            </Typography>
            <Typography sx={{fontWeight:600}}>
             {student.rollNumber}
            </Typography>
        </Box>

        <Box>
            <Typography variant="body2" color='text.secondary'>
                Branch
            </Typography>
            <Typography sx={{fontWeight:600}}>
             {student.branch}
            </Typography>
        </Box>

        <Box>
            <Typography variant="body2" color='text.secondary'>
                Year
            </Typography>
            <Typography sx={{fontWeight:600}}>
             {student.year}
            </Typography>
        </Box>

        <Box>
            <Typography variant="body2" color='text.secondary'>
                Gender
            </Typography>
            <Typography sx={{fontWeight:600}}>
             {student.gender}
            </Typography>
        </Box>

        <Box>
            <Typography variant="body2" color='text.secondary'>
                Date of Birth
            </Typography>
            <Typography sx={{fontWeight:600}}>
             {student.dateOfBirth}
            </Typography>
        </Box>

        <Box>
            <Typography variant="body2" color='text.secondary'>
                City
            </Typography>
            <Typography sx={{fontWeight:600}}>
             {student.city}
            </Typography>
        </Box>

        <Box>
            <Typography variant="body2" color='text.secondary'>
                State
            </Typography>
            <Typography sx={{fontWeight:600}}>
             {student.state}
            </Typography>
        </Box>

        <Box>
            <Typography variant="body2" color='text.secondary'>
                Pincode
            </Typography>
            <Typography sx={{fontWeight:600}}>
             {student.pincode}
            </Typography>
        </Box>

       
        </Box>

        </CardContent>

        </Card>

        </Container>
    )
}
export default StudentDetails