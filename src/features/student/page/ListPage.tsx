import { Box, Button, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import StudentTable from "../components/StudentTable";

const ListPage = () => {
  const { pathname } = useLocation()
  return (
    <Box style={{
      position: 'relative',
      paddingTop: '8px',
    }}>
      <Box style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px'
      }}>
        <Typography variant="h4">Students</Typography>

        <Link to={`${pathname}/add`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Add new student
          </Button>
        </Link>
      </Box>
      {/* <StudentTable studentList={}/> */}
    </Box>
  )
}

export default ListPage