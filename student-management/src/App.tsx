import './App.css'

import { useEffect } from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'

import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import AddStudent from './pages/AddStudent'
import StudentDetails from './pages/StudentDetails'

import {
  StudentProvider,
  useStudentContext
} from './context/StudentContext'


function AppContent() {

  const { students } = useStudentContext()

  useEffect(() => {

    document.title = `Students: ${students.length}`

  }, [students.length])

  return (
    <>
      <Navbar title="Student Management" />

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/add-student"
          element={<AddStudent />}
        />

        <Route
          path="/add-student/:id"
          element={<AddStudent />}
        />

        <Route
          path="/students/:id"
          element={<StudentDetails />}
        />

      </Routes>
    </>
  )
}


function App() {

  return (
    <BrowserRouter>

      <StudentProvider>

        <AppContent />

      </StudentProvider>

    </BrowserRouter>
  )
}

export default App