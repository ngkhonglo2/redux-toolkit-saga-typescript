import { Box, Paper, Typography } from "@mui/material"

export interface StatisticItemProps {
  icon?: React.ReactElement
  label?: string
  value?: string | number
}

const StatisticItem = ({ icon, value, label }: StatisticItemProps) => {
  return (
    <Paper style={{
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      border: '1px solid'
    }}>
      <Box>{icon}</Box>
      <Box>
        <Typography variant="h5" align="right">
          {value}
        </Typography>
        <Typography variant="caption">
          {label}
        </Typography>
      </Box>
    </Paper>
  )
}

export default StatisticItem