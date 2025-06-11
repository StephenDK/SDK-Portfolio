import React, { useEffect } from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EducationHero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const image = new Image();
    image.src = "/images/education/cap-diploma.webp";
  }, []);

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
                  src="/images/education/cap-diploma.webp"
                  alt="Education Placeholder"
                  sx={{
                    width: "350px",
                    height: "auto",
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
                  Education
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    fontWeight: "medium",
                  }}
                >
                  Qualifications and Certifications
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
};

export default EducationHero;
