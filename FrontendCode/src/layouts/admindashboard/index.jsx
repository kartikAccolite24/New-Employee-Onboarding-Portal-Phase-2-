import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Main from './main';
import Header from './header';
import Navadmin from './navadmin';

// ----------------------------------------------------------------------

export default function AdminDashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);
  const role = localStorage.getItem("loginType");
  
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
       
       {role === "admin" && <Navadmin openNav={openNav} onCloseNav={() => setOpenNav(false)} />}
        {/* <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} /> */}

        <Main>{children}</Main>
      </Box>
    </>
  );
}

AdminDashboardLayout.propTypes = {
  children: PropTypes.node,
};
