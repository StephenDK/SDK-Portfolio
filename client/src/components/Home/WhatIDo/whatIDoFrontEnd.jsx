import React from "react";
import { Grid, Typography, Box, Container, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StarIcon from "@mui/icons-material/Star"; // Star icon for text
import HTML from "../../../images/icons/html.svg";
import JAVASCRIPT from "../../../images/icons/javascript.svg";
import CSS from "../../../images/icons/css.svg";
import REACT from "../../../images/icons/react.svg";

const WhatIDoFrontEnd = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Container maxWidth="lg" ref={ref} sx={{ py: 4 }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        What I Do
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 6, lg: 30 }}
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={leftVariants}
              style={{ width: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src="https://placehold.co/300x400"
                  alt="My Work"
                  sx={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </Box>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={rightVariants}
              style={{ width: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 3,
                    justifyContent: "center",
                    alignItems: "center",
                    mb: 3,
                    flexWrap: "wrap",
                  }}
                >
                  <Box
                    component="img"
                    src={HTML}
                    alt="HTML"
                    sx={{
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Box
                    component="img"
                    src={JAVASCRIPT}
                    alt="Javascript"
                    sx={{
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Box
                    component="img"
                    src={CSS}
                    alt="CSS"
                    sx={{
                      width: 60,
                      height: 60,
                      color: "primary.contrastText",
                    }}
                  />
                  <Box
                    component="img"
                    src={REACT}
                    alt="React"
                    sx={{
                      width: 60,
                      height: 60,
                      color: "primary.contrastText",
                    }}
                  />
                </Box>

                <Stack
                  direction="column"
                  spacing={2}
                  sx={{
                    width: "100%",
                    maxWidth: "500px",
                    alignItems: "center",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <StarIcon
                      sx={{ fontSize: 25, color: "primary.contrastText" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ textAlign: "left", flex: 1 }}
                    >
                      Building responsive and interactive user interfaces using
                      HTML, CSS, and modern JavaScript frameworks.
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <StarIcon
                      sx={{ fontSize: 25, color: "primary.contrastText" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ textAlign: "left", flex: 1 }}
                    >
                      Experienced in developing scalable front-end applications
                      with React, ensuring optimal performance and user
                      experience.
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <StarIcon
                      sx={{ fontSize: 25, color: "primary.contrastText" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ textAlign: "left", flex: 1 }}
                    >
                      Skilled in crafting clean, maintainable code and
                      implementing dynamic UI components for real-time web
                      applications.
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhatIDoFrontEnd;
