import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useResponsive } from 'src/hooks/use-responsive';
import Footer from 'src/layouts/dashboard/Footer';
import { NAV, HEADER } from './config-layout';
// ----------------------------------------------------------------------
const SPACING = 8;
export default function Main({ children, sx, ...other }) {
  const lgUp = useResponsive('up', 'lg');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          py: `${HEADER.H_MOBILE + SPACING}px`,
          ...(lgUp && {
            px: 2,
            py: `${HEADER.H_DESKTOP + SPACING}px`,
            width: `calc(100% - ${NAV.WIDTH}px)`,
          }),
          ...sx,
        }}
        {...other}
      >
        {children}
      </Box>
      <div class="split bottom">
  <div class="centered">
  </div>
</div>
      {/* <Footer /> */}
    </Box>
  );
}
Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};