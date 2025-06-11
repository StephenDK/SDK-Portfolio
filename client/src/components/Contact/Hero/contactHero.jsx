import React from "react";
import { Grid, Typography, Box, Container, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactMeHero = () => {
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

  const handleCall = () => {
    window.location.href = "tel:+16509954362"; // Replace with your phone number
  };

  const handleEmail = () => {
    window.location.href = "mailto:stephen.d.klein@outlook.com"; // Replace with your email address
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
                  src="/images/contact/animated-me.png"
                  alt="Education Placeholder"
                  sx={{
                    width: { xs: "250px", md: "350px" },
                    height: { xs: "250px", md: "350px" },
                    borderRadius: "50%",
                    boxShadow: 3,
                    display: "block",
                    margin: "0 auto",
                    objectFit: "cover",
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
                  Contact Me
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: "center",
                    fontWeight: "medium",
                    maxWidth: "630px",
                    mb: 3,
                  }}
                >
                  Feel free to reach out via social media or send me a message.
                  I’m here to assist with full-stack development and UI/UX
                  design projects.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/stephen-dklein/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    sx={{ color: "text.primary" }}
                  >
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    component="a"
                    href="https://github.com/StephenDK"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    sx={{ color: "text.primary" }}
                  >
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={handleCall}
                    aria-label="Call Me"
                    sx={{ color: "text.primary" }}
                  >
                    <PhoneIcon fontSize="large" />
                  </IconButton>
                  <IconButton
                    onClick={handleEmail}
                    aria-label="Email Me"
                    sx={{ color: "text.primary" }}
                  >
                    <EmailIcon fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ContactMeHero;
