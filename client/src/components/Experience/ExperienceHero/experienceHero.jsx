import React, { useContext } from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../../themeContext";

import ExperienceHeroLight from "../../../images/experience/experience-hero-light.png";
import ExperienceHeroDark from "../../../images/experience/experience-hero-dark.png";

const ProjectHero = () => {
  const { mode } = useContext(ThemeContext);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const boxVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: 6 }}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={boxVariants}
        style={{ width: "100%" }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            spacing={6}
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
                    mode === "dark" ? ExperienceHeroDark : ExperienceHeroLight
                  }
                  alt="Education Placeholder"
                  sx={{
                    width: "400px",
                    height: "350px",
                    borderRadius: 2,
                    boxShadow: 3,
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
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
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    mb: 2,
                  }}
                >
                  Experience
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    fontWeight: "medium",
                    maxWidth: "630px",
                  }}
                >
                  I have worked as an Information Technology Specialist,
                  applying my skills to provide support and solve complex
                  problems. I enjoy collaborating on projects that drive
                  efficiency and streamline operations. Currently, I’m focused
                  on using my expertise to develop software services that help
                  small businesses improve their workflows and grow through
                  tailored technology solutions.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ProjectHero;
