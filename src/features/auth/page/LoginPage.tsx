import * as React from 'react';
import {  Box, Button, Paper, Typography } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { login } from '../authSlice';

const LoginPage = () => {
  const dispatch = useAppDispatch()

  const handleLoginClick = () => {
    dispatch(login({
      username: '',
      password: '',
    }))
  }
  return (
    <div style={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper sx={{ overflow: 'auto', padding: 3 }} elevation={1}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}>
            Fake login
          </Button>
        </Box>
      </Paper>
    </div>
  )
}

export default LoginPage