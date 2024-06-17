import React from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import { useResponsive } from 'src/hooks/use-responsive';
import { bgBlur } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import { NAV, HEADER } from './config-layout';
import AccountPopover from './common/account-popover';
import LanguagePopover from './common/language-popover';
import NotificationsPopover from './common/notifications-popover';

// Image component
const ImageWithIcons = ({ onOpenNav }) => (
  <Box sx={{ width: '1000', height: '350', position: 'relative' }}>
    {/* <img
      src="https://lever-client-logos.s3.us-west-2.amazonaws.com/3f46748d-52fd-47dc-ba95-1172d582f4de-1706797958077.png" // Replace with your image URL
      alt=''
      style={{ width: '800px', marginRight: '300px', height: '95px', display: 'flex' }} // Adjust styling as needed
    /> */}

    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Stack direction="row" spacing={1}>
        {/* <LanguagePopover /> */}
        <NotificationsPopover />
        <AccountPopover />  
      </Stack>
    </Box>
  </Box>
);

const Header = ({ onOpenNav }) => {
  const theme = useTheme();
  const lgUp = useResponsive('up', 'lg');

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 2,
          px: { lg: 5 },
        }}
      >
        {/* <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton> */}
        <Box sx={{ flexGrow: 1 }} />
        <ImageWithIcons onOpenNav={onOpenNav} />
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func, // Add PropTypes validation for onOpenNav prop
};

export default Header;
