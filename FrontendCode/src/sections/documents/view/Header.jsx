import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Box,useTheme,Typography } from "@mui/material";

import { tokens } from './themee';



const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

// Add prop type validation for the title and subtitle props
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired, // Assuming subtitle is also required
};

export default Header;
