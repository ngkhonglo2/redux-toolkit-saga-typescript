import { NotFound, PrivateRoute } from 'components/Common';
import { Route, Routes } from 'react-router-dom';

import DashBoard from 'features/dashboard';
import Student from 'features/student';
import ListPage from 'features/student/page/ListPage';
import { AdminLayout } from './components/Layout';
import LoginPage from './features/auth/page/LoginPage';
import AddListPage from 'features/student/page/AddListPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path='/admin' element={<AdminLayout />}>
            <Route path='/admin/dashboard' element={<DashBoard />} />
            <Route path='/admin/students' element={<Student />} >
              <Route path='/admin/students' element={<ListPage />} />
              <Route path='/admin/students/add' element={<AddListPage/>} />
              <Route path='/admin/students/:studentId' element={<AddListPage/>} />
            </Route>
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
