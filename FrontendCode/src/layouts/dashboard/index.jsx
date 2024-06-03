import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Nav from './nav';
import Main from './main';
import Header from './header';
import Footer from 'src/layouts/dashboard/Footer';
// ----------------------------------------------------------------------
export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);
  const role = localStorage.getItem("role");
  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        {role === "employee" && (
          <Box
            component="nav"
            sx={{
              position: { lg: 'sticky' },
              top: { lg: 0 },
              height: { lg: '100vh' },
              flexShrink: 0,
              width: { lg:280 }, // Set the width of the nav, adjust as needed
              bgcolor: 'background.paper',
            }}
          >
            <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
          </Box>
        )}
        <Main>{children}</Main>
      </Box>
      <Footer  />
    </>
  );
}
DashboardLayout.propTypes = {
  children: PropTypes.node,
};



