import { Box, Paper, Typography } from '@mui/material'

export interface WidgetProps {
  title?: string
  children: any
}
const Widget = ({ title, children }: WidgetProps) => {
  return (
    <Paper sx={{
      padding: '16px',
      border: `1px solid`
    }}>
      <Typography variant='button'>{title}</Typography>
      <Box mt={2}>{children}</Box>
    </Paper>
  )
}

export default Widget