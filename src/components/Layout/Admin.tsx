import { Box } from '@mui/material';
import Header from 'components/Common/Header';
import Sidebar from 'components/Common/Sidebar';
import { Outlet } from 'react-router-dom';

export function AdminLayout() {
  return (
    <Box style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      gridTemplateColumns: '250px 1fr',
      gridTemplateAreas: `"header header" "sidebar main"`,
      minHeight: '100vh'
    }}>
      <Box style={{ gridArea: 'header' }}>
        <Header />
      </Box>
      <Box style={{ gridArea: 'sidebar', borderRight: '1px solid' }}>
        <Sidebar />
      </Box>
      <Box style={{ gridArea: 'main', padding: '16px 24px' }}>
        <Outlet/>
      </Box>
    </Box>
  )
}