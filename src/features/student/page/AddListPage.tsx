import { ChevronLeft } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import studentApi from "api/studentApi";
import { Student } from "models";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";

import StudentForm from "../components/StudentForm";

const AddListPage = () => {
  const navigate = useNavigate()
  const { studentId } = useParams<{ studentId: string }>()
  const isEdit = Boolean(studentId);
  const [student, setStudent] = useState<Student>()

  useEffect(() => {
    if (!studentId) return;

    (async () => {
      try{
        const data: Student =  await studentApi.getById(studentId)
        setStudent(data)
      }catch(error){
        console.log('Failed to fetch student details', error);
      }
    })();
  }, [studentId])

  const handleStudentFormSubmit = async (formValues: Student) => {
    // TODO: Handle submit here, call API  to add/update student
    if (isEdit) {
      await studentApi.update(formValues);
    } else {
      await studentApi.add(formValues);
    }
    // Toast success
    toast.success('Save student successfully!')

    // Redirect back to student list
    navigate('/admin/students')
  }


  const initialValues: Student = {
    name: '',
    age: '',
    mark: '',
    gender: 'male',
    city: '',
    ...student,
  } as Student;

  return (
    <Box>
      <Link to="/admin/students">
        <Typography variant="caption" style={{ display: 'flex', alignItems: 'center' }}>
          <ChevronLeft /> Back to student list
        </Typography>
      </Link>

      <Typography variant="h4">{isEdit ? 'Update student info' : 'Add new student'}</Typography>

      {(!isEdit || Boolean(student)) && (
        <Box mt={3}>
          <StudentForm initialValues={initialValues} onSubmit={handleStudentFormSubmit} />
        </Box>
      )}
    </Box>
  )
}

export default AddListPage