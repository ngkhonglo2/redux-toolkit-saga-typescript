import { LinearScale } from '@mui/icons-material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Box, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import { fetchData, selectDashboardStatistics, selecthighestStundentList, selectLowestStundentList, selectRankingByCityList } from 'redux/dashboard/slice';
import StatisticItem from './components/StatisticItem';
import StudentRankingList from './components/StudentRankingList';
import Widget from './components/Widget';
const DashBoard = () => {
  const statistics = useAppSelector(selectDashboardStatistics)
  const highestStudentList = useAppSelector(selecthighestStundentList)
  const lowestStudentList = useAppSelector(selectLowestStundentList)
  const rankingByCityList = useAppSelector(selectRankingByCityList)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<PeopleAltIcon fontSize="large" color="primary" />}
            label="male"
            value={statistics.maleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<ChatRoundedIcon fontSize="large" color="primary" />}
            label="female"
            value={statistics.femaleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<ChatBubbleIcon fontSize="large" color="primary" />}
            label="mark >= 8"
            value={statistics.highMarkCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<LinearScale fontSize="large" color="primary" />}
            label="mark <= 5"
            value={statistics.lowMarkCount}
          />
        </Grid>
      </Grid>
      {/* All students rankings */}
      <Box mt={5}>
        <Typography variant="h4">
          All students
        </Typography>
        <Box mt={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <Widget title='Student with highest mark'>
                <StudentRankingList studentList={highestStudentList} />
              </Widget>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Widget title="Student with lowest mark">
                <StudentRankingList studentList={lowestStudentList} />
              </Widget>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Rankings by city */}
      <Box mt={5}>
        <Typography variant="h4">Rankings by city</Typography>

        <Box mt={2}>
          <Grid container spacing={3}>
            {rankingByCityList.map((ranking) => (
              <Grid key={ranking.cityId} item xs={12} md={6} lg={3}>
                <Widget title={ranking.cityName}>
                  <StudentRankingList studentList={ranking.rankkingList} />
                </Widget>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>

  )
}

export default DashBoard