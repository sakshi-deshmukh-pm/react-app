import { useEffect, useState } from 'react'
import type { Student } from '../types/Student'
import { getStudents } from '../services/studentService'

const defaultAvatar = '/avatars/student1.webp'

function useStudents() {

  const [students, setStudents] = useState<Student[]>(() => {

    const savedStudents = localStorage.getItem('students')

    if (savedStudents) {

      const saved: Student[] = JSON.parse(savedStudents)

      if (saved.length > 0) {

        return saved.map(student => ({
          ...student,
          avatar: student.avatar || defaultAvatar
        }))
      }
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
        pincode: '411001',
        avatar: defaultAvatar
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
        pincode: '411002',
        avatar: defaultAvatar
      }
    ]
  })

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {

    async function loadApiStudents() {

      try {

        const apiStudents = await getStudents()

        const updatedApiStudents = apiStudents.map(student => ({
          ...student,
          id: 1000 + student.id,
          avatar: student.avatar || defaultAvatar
        }))

        setStudents(currentStudents => {

          const localStudents = currentStudents.filter(
            student => student.id < 1000
          )

          return [
            ...localStudents,
            ...updatedApiStudents
          ]
        })

        setLoading(false)

      } catch (error) {

        setError('Failed to load API students')
        setLoading(false)

      }
    }

    loadApiStudents()

  }, [])

  useEffect(() => {

    localStorage.setItem(
      'students',
      JSON.stringify(students)
    )

  }, [students])

  function addStudent(
    student: Omit<Student, 'id'>
  ) {

    const newStudent: Student = {
      id: Date.now(),
      ...student,
      avatar: student.avatar || defaultAvatar
    }

    setStudents(currentStudents => [
      ...currentStudents,
      newStudent
    ])
  }

  function editStudent(
    id: number,
    updatedStudent: Omit<Student, 'id'>
  ) {

    setStudents(currentStudents =>
      currentStudents.map(student =>
        student.id === id
          ? {
              id: student.id,
              ...updatedStudent,
              avatar:
                updatedStudent.avatar ||
                student.avatar ||
                defaultAvatar
            }
          : student
      )
    )
  }

  function deleteStudent(id: number) {

    setStudents(currentStudents =>
      currentStudents.filter(
        student => student.id !== id
      )
    )
  }

  return {
    students,
    loading,
    error,
    addStudent,
    editStudent,
    deleteStudent
  }
}

export default useStudents
