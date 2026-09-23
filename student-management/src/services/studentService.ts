import type { Student } from "../types/Student";
import studentImg1 from '../../public/avatars/student1.webp'

export async function getStudents(): Promise<Student[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  const data = await response.json();

  const students: Student[] = data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone:user.phone,
    rollNumber:`API${user.id.toString().padStart(4, "0")}`,
    branch: "CSE",
    year:"4th Year",
    gender:"Other",
    dateOfBirth: "2000-01-01",
    city: user.address.city,
    state: "Maharashtra",
    pincode: "000000",
    passPort : studentImg1


  }));

  return students;
}