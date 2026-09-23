import {
  createContext,
  useContext
} from 'react'

import type { ReactNode } from 'react'
import type { Student } from '../types/Student'

import useStudents from '../hooks/useStudents'

interface StudentContextType {
  students: Student[]

  addStudent: (
    student:Omit<Student,'id'>
  ) => void

  editStudent: (
    id:number,
    student:Omit<Student,'id'>
  ) => void

  deleteStudent: (id: number) => void
}

const StudentContext =
  createContext<StudentContextType | undefined>(undefined)

interface StudentProviderProps {
  children: ReactNode
}

export function StudentProvider({
  children
}: StudentProviderProps) {

  const {
    students,
    addStudent,
    editStudent,
    deleteStudent
  } = useStudents()

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        editStudent,
        deleteStudent
      }}
    >
      {children}
    </StudentContext.Provider>
  )
}

export function useStudentContext() {

  const context = useContext(StudentContext)

  if (!context) {
    throw new Error(
      'useStudentContext must be used inside StudentProvider'
    )
  }

  return context
}