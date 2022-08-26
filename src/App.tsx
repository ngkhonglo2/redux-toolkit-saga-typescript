import React from 'react';
import { NotFound, PrivateRoute } from 'components/Common';
import { Routes, Route } from 'react-router-dom';

import { AdminLayout } from './components/Layout';
import LoginPage from './features/auth/page/LoginPage';
import DashBoard from 'features/dashboard';
import Student from 'features/student';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='/admin/dashboard' element={<DashBoard />} />
            <Route path='/admin/student' element={<Student />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
