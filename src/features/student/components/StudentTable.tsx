import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { City, Student } from "models"
import { useState } from "react"
import { capitalizeString, getMarkColor } from "utils"

export interface StudentTableProps {
  studentList: Student[]
  cityMap: {
    [key: string]: City
  }
  onEdit: (student: Student) => void
  onDelete: (student: Student) => void
}

const StudentTable = ({ studentList, cityMap, onEdit, onDelete }: StudentTableProps) => {
  const [open, setOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student>();

  const handleDeleteClick = (student: Student) => {
    setSelectedStudent(student)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveConfirm = (student: Student) => {
    onDelete?.(student);
    setOpen(false);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Mark</TableCell>
              <TableCell>City</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {studentList.map((student) => (
              <TableRow>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{capitalizeString(student.gender)}</TableCell>
                <TableCell>
                  <Box color={getMarkColor(student.mark)} fontWeight="bold">
                    {student.mark}
                  </Box>
                </TableCell>
                <TableCell>{cityMap[student.city]?.name}</TableCell>
                <TableCell align="right">
                  <Button size="small" color="primary" onClick={() => onEdit(student)}>
                    Edit
                  </Button>
                  <Button size="small" color="warning" onClick={() => handleDeleteClick(student)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Remove dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Remove a student?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to remove student named "{selectedStudent?.name}". <br />
            This action can&apos;t be undo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={() => handleRemoveConfirm(selectedStudent as Student)}
            color="warning"
            variant="contained"
            autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default StudentTable