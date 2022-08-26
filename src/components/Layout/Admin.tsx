import React from 'react';
import { Box } from '@mui/material';

export function AdminLayout() {
  return (
    <Box style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      gridTemplateColumns: '300px 1fr',
      gridTemplateAreas: `"header header" "sidebar main"`,
      minHeight: '100vh'
    }}>
      <Box style={{gridArea: 'header', borderBottom: '1px solid'}}>HEADER</Box>
      <Box style={{gridArea: 'sidebar', borderRight: '1px solid'}}>SIDEBAR</Box>
      <Box style={{gridArea: 'main'}}>MAIN</Box>
    </Box>
  )
}