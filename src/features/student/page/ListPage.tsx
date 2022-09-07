import { Box, Button, Pagination, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Student } from "models";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { selectCityList, selectCityMap, fetchCityList } from "redux/city/slice";
import * as slice from "redux/student/slice";
import StudentTable from "../components/StudentTable";

const ListPage = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const studentList = useAppSelector(slice.selectStudentList)
  const pagination = useAppSelector(slice.selectStudentPagination)
  const filter = useAppSelector(slice.selectStudentFilter)
  const loading = useAppSelector(slice.selectStudentLoading)
  const cityMap = useAppSelector(selectCityMap);
  const cityList = useAppSelector(selectCityList);

  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(slice.fetchStudentList(filter))
    dispatch(fetchCityList())
  }, [dispatch, filter])

  const handlePageChange = (e: any, page: number) => {
    dispatch(slice.setFilter({
      ...filter,
      _page: page,
    }))
  }

  const handleEditStudent = async (student: Student) => {
    navigate(`${pathname}/${student.id}`)
  }

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
      <StudentTable studentList={studentList} cityMap={cityMap} onEdit={handleEditStudent}/>

      <Box my={2} display='flex' justifyContent='center'>
        <Pagination
          color="primary"
          count={Math.ceil(pagination._totalRows / pagination._limit)}
          page={pagination._page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  )
}

export default ListPage