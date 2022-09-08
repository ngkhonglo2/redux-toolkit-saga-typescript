import { Box, Button, Pagination, Typography } from "@mui/material";
import studentApi from "api/studentApi";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { ListParams, Student } from "models";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { selectCityList, selectCityMap, fetchCityList } from "redux/city/slice";
import * as slice from "redux/student/slice";
import StudentFilters from "../components/StudentFilters";
import StudentTable from "../components/StudentTable";

const ListPage = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const studentList = useAppSelector(slice.selectStudentList)
  const pagination = useAppSelector(slice.selectStudentPagination)
  const filter = useAppSelector(slice.selectStudentFilter)
  const cityMap = useAppSelector(selectCityMap);
  const cityList = useAppSelector(selectCityList);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(slice.fetchStudentList(filter))
    dispatch(fetchCityList())
  }, [dispatch, filter])

  const handlePageChange = (e: any, page: number) => {
    dispatch(slice.setFilter({
      ...filter,
      _page: page,
    }))
  }
  const handleSearchChange = (newFilter: ListParams) => {
    dispatch(slice.setFilterWithDebounce(newFilter));
  };

  const handleFilterChange = (newFilter: ListParams) => {
    dispatch(slice.setFilter(newFilter))
  }

  const handleEditStudent = async (student: Student) => {
    navigate(`${pathname}/${student.id}`)
  }

  const handleDeleteStudent = async (student: Student) => {
    try {
      // Remove student API
      await studentApi.remove(student?.id || '');

      toast.success('Remove student successfully!');

      // Trigger to re-fetch student list with current filter
      const newFilter = { ...filter };
      dispatch(slice.setFilter(newFilter));
    } catch (error) {
      // Toast error
      console.log('Failed to fetch student', error);
    }
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

      <Box mb={3}>
        <StudentFilters
          filter={filter}
          cityList={cityList}
          onSearchChange={handleSearchChange}
          onChange={handleFilterChange}
        />
      </Box>

      <StudentTable
        studentList={studentList}
        cityMap={cityMap}
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent}
      />

      <Box my={2} display='flex' justifyContent='center'>
        <Pagination
          color="primary"
          count={Math.ceil(pagination._totalRows / pagination._limit)}
          page={pagination._page}
          onChange={handlePageChange}
        />
      </Box>

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </Box>
  )
}

export default ListPage