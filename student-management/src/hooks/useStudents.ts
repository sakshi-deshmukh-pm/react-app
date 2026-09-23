import { useEffect, useState } from 'react'
import type { Student } from '../types/Student'

function useStudents() {
  const [students, setStudents] = useState<Student[]>(() => {
    const savedStudents = localStorage.getItem('students')

    if (savedStudents) {
      return JSON.parse(savedStudents)
    }

    return [
      {
        id: 1,
        name: 'Sakshi Deshmukh',
        email: 'sakshi@gmail.com',
        phone: '9876543210',
        rollNumber: 'CSE2026001',
        branch: 'CSE',
        year: '4th Year',
        gender: 'Female',
        dateOfBirth: '2004-05-12',
        city: 'Pune',
        state: 'Maharashtra',
        pincode: '411001'

      },
      {
        id: 2,
        name: 'Rahul Patil',
        email: 'rahul@gmail.com',
        phone: '9876543211',
        rollNumber: 'IT2026001',
        branch: 'IT',
        year: '4th Year',
        gender: 'Male',
        dateOfBirth: '2004-08-20',
        city: 'Pune',
        state: 'Maharashtra',
        pincode: '411002'

      }
    ]
  })

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  function addStudent(student:Omit<Student,'id'>) {
    const newStudent:Student={
      id:Date.now(),
      ...student
    }

    setStudents([...students, newStudent])
  }

  function editStudent(
    id:number,
    updatedStudent:Omit<Student,'id'>
  ) {
    const updatedStudents = students.map(student =>
      student.id === id
        ? {
          id:student.id,
          ...updatedStudent
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