

import React from 'react';
import { Typography, Box } from '@mui/material';

const IntroText = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        py: { xs: 2, sm: 3 }, // Responsive vertical padding
        width: '100%',
        maxWidth: { xs: '90%', md: '600px' }, // Responsive width
        mx: 'auto', // Center horizontally
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'primary.contrastText',
          fontWeight: 800,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
          mb: 2, // Margin bottom for spacing
        }}
      >
        Hi, my name is Stephen.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: 'primary.contrastText',
          fontWeight: 800,
          fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }, // Responsive font size
        }}
      >
        I'm a full-stack web developer & UI/UX designer.
      </Typography>
    </Box>
  );
};

export default IntroText;