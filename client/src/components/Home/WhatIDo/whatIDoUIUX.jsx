import React from "react";
import { Grid, Typography, Box, Container, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import StarIcon from "@mui/icons-material/Star"; // Star icon for text
import FIGMA from "../../../images/icons/figma.svg";
import ADOBEXD from "../../../images/icons/adobexd.svg";
import MIRO from "../../../images/icons/miro.svg";
import JIRA from "../../../images/icons/jira.svg";

const WhatIDo = () => {
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
                    src={FIGMA}
                    alt="Figma"
                    sx={{
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Box
                    component="img"
                    src={ADOBEXD}
                    alt="Adobe XD"
                    sx={{
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Box
                    component="img"
                    src={MIRO}
                    alt="Miro"
                    sx={{
                      width: 60,
                      height: 60,
                    }}
                  />
                  <Box
                    component="img"
                    src={JIRA}
                    alt="Jira"
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
                      Designing intuitive and engaging user interfaces with
                      Figma and Adobe XD for web and mobile platforms.
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
                      Collaborating in real-time with cross-functional teams
                      using Miro to map user journeys and wireframe concepts.
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
                      Streamlining the design process through agile workflows
                      and task management with Jira to ensure efficient
                      delivery.
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

export default WhatIDo;
