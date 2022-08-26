import React from 'react';
import { NotFound, PrivateRoute } from 'components/Common';
import { Routes, Route } from 'react-router-dom';

import { AdminLayout } from './components/Layout';
import LoginPage from './features/auth/page/LoginPage';
import { Button } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { logout } from 'features/auth/authSlice';

function App() {
  const dispatch = useAppDispatch()

  const handleLogoutClick = () => {
    dispatch(logout())
  }
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleLogoutClick}>
        Logout
      </Button>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path='/admin' element={<AdminLayout />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
