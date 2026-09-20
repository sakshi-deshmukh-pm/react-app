import { useEffect, useState } from 'react'

interface Student {
  id: number
  title: string
  email: string
  branch: string
}

function useStudents() {
  const [students, setStudents] = useState<Student[]>(() => {
    const savedStudents = localStorage.getItem('students')

    if (savedStudents) {
      return JSON.parse(savedStudents)
    }

    return [
      {
        id: 1,
        title: 'Sakshi Deshmukh',
        email: 'sakshi@gmail.com',
        branch: 'CSE'
      },
      {
        id: 2,
        title: 'Rahul Patil',
        email: 'rahul@gmail.com',
        branch: 'IT'
      }
    ]
  })

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  function addStudent(name: string, email: string, branch: string) {
    const newStudent: Student = {
      id: Date.now(),
      title: name,
      email: email,
      branch: branch
    }

    setStudents([...students, newStudent])
  }

  function editStudent(
    id: number,
    name: string,
    email: string,
    branch: string
  ) {
    const updatedStudents = students.map(student =>
      student.id === id
        ? {
            ...student,
            title: name,
            email: email,
            branch: branch
          }
        : student
    )

    setStudents(updatedStudents)
  }

  function deleteStudent(id: number) {
    const updatedStudents = students.filter(
      student => student.id !== id
    )

    setStudents(updatedStudents)
  }

  return {
    students,
    addStudent,
    editStudent,
    deleteStudent
  }
}

export default useStudents