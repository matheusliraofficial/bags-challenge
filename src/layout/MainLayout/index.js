import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

const MainLayout = () => (
  <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
    <Outlet />
  </Box>
);

export default MainLayout;
