import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import WebIcon from '@mui/icons-material/Web';
import DatabaseIcon from '@mui/icons-material/Storage';

const WhatIDo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <Container maxWidth="lg" ref={ref} sx={{ py: 4 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 3 }}
      >
        What I Do
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            
            width: '100%',
          }}
        >
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={leftVariants}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <Box
                  component="img"
                  src="https://placehold.co/300x400"
                  alt="My Work"
                  sx={{
                    width: '100%',
                    maxWidth: '300px',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
          <Grid item></Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={rightVariants}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    justifyContent: 'center',
                    mb: 2,
                    width: '100%',
                    flexWrap: 'wrap',
                  }}
                >
                  <CodeIcon sx={{ fontSize: 40, color: '#1976d2' }} />
                  <BrushIcon sx={{ fontSize: 40, color: '#1976d2' }} />
                  <WebIcon sx={{ fontSize: 40, color: '#1976d2' }} />
                  <DatabaseIcon sx={{ fontSize: 40, color: '#1976d2' }} />
                </Box>

                <Box sx={{ width: '100%', textAlign: 'center' }}>
                  <Typography variant="body2">
                    I design and develop full-stack web applications with modern technologies.
                  </Typography>
                  <Typography variant="body2">
                    My UI/UX designs focus on user-friendly, responsive, and visually appealing interfaces.
                  </Typography>
                  <Typography variant="body2">
                    From databases to front-end, I deliver end-to-end solutions for your needs.
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhatIDo;