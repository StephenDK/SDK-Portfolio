import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Certificates() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const certificates = [
    {
      id: 1,
      name: "Full-Stack Engineer",
      program: "UC Berkeley Extension",
    },
    {
      id: 2,
      name: "CCNA",
      program: "Cisco Systems",
    },
    {
      id: 3,
      name: "React Nano Degree",
      program: "Udacity",
    },
    {
      id: 4,
      name: "Cloud Computing",
      program: "AWS Training",
    },
    {
      id: 5,
      name: "Cloud Computing",
      program: "AWS Training",
    },
    {
      id: 6,
      name: "Cloud Computing",
      program: "AWS Training",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        p: { xs: 2, sm: 3 },
        mt: 4,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        Awards & Certifications
      </Typography>
      <Grid
        container
        spacing={2}
        ref={ref}
        sx={{
          justifyContent: "center",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {certificates.map((cert) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={cert.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              style={{ width: "100%", maxWidth: "345px" }}
            >
              <Card sx={{ width: "100%", m: "auto" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", sm: "100%" },
                    objectFit: "cover",
                    m: "auto",
                    p: 1,
                  }}
                  image="https://placehold.co/300x200"
                  alt={`${cert.name} Certificate`}
                />
                <CardContent sx={{ textAlign: "center", p: 2 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {cert.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {cert.program}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
