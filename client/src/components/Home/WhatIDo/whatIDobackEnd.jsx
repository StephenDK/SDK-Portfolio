import React, { useContext } from "react";
import { Grid, Typography, Box, Container, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../../themeContext"; // Ensure ThemeContext is imported

import StarIcon from "@mui/icons-material/Star"; // Star icon for text
import NODEJS from "../../../images/icons/nodejs.svg";
import MONGODB from "../../../images/icons/mongodb.svg";
import MYSQL from "../../../images/icons/mysql.svg";
import CPLUSPLUS from "../../../images/icons/c.svg";

import BackendServersLight from "../../../images/whatIDo/backend-servers-light.png";
import BackendServersDark from "../../../images/whatIDo/backend-servers-dark.png";

const WhatIDo = () => {
  const { mode } = useContext(ThemeContext);
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
            order={{ xs: 2, md: 1 }}
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
                    src={NODEJS}
                    alt="Nodejs"
                    sx={{
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Box
                    component="img"
                    src={MONGODB}
                    alt="MongoDB"
                    sx={{
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Box
                    component="img"
                    src={MYSQL}
                    alt="MySQL"
                    sx={{
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Box
                    component="img"
                    src={CPLUSPLUS}
                    alt="C++"
                    sx={{
                      width: 60,
                      height: 60,
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
                      Developing robust and scalable server-side applications
                      using Node.js and Express.
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
                      Proficient in designing and optimizing databases with
                      MongoDB and MySQL for high-performance data management.
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
                      Experience in building efficient system-level components
                      and backend logic using C++ for critical application
                      workflows.
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
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
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src={
                    mode === "dark" ? BackendServersDark : BackendServersLight
                  }
                  alt="My Work"
                  sx={{
                    width: "100%",
                    maxWidth: "340px",
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
        </Grid>
      </Box>
    </Container>
  );
};

export default WhatIDo;
