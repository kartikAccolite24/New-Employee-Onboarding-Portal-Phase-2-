import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function LanguagePopover() {
  const navigate = useNavigate();

  const handleNavigateToFAQ = () => {
    navigate("/Faq");
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton
        sx={{
          width: 40,
          height: 40,
          
        }}
      >
        {/* You can add an icon or image inside the IconButton if needed */}
      </IconButton>

      <Button
        variant="contained"
        color="primary"
        onClick={handleNavigateToFAQ}
        sx={{ ml: 2 ,   background: 'linear-gradient(90deg, #003A74, #006AD5)'  ,width:"40px",height:"40px"
      }}
      >
        FAQ?
      </Button>
    </Box>
  );
}
