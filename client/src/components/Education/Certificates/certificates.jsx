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

import Foothill from "../../../images/education/foothill-college.png";
import UCBerkeley from "../../../images/education/uc-berkeley.png";
import Cisco from "../../../images/education/cisco.png";
import Udemy from "../../../images/education/udemy.png";
import Udacity from "../../../images/education/udacity.png";
import SCCGOV from "../../../images/education/sccgov.png";
import SoloLearn from "../../../images/education/sololearn.png";

export default function Certificates() {
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
      image: UCBerkeley,
    },
    {
      id: 2,
      name: "CCNA",
      program: "Cisco Systems",
      image: Cisco,
    },
    {
      id: 3,
      name: "React Nano Degree",
      program: "Udacity",
      image: Udacity,
    },
    {
      id: 4,
      name: "Recognition Award",
      program: "County of Santa Clara",
      image: SCCGOV,
    },
    {
      id: 5,
      name: "Node Master Class",
      program: "Udemy",
      image: Udemy,
    },
    {
      id: 6,
      name: "React & Redux",
      program: "Udemy",
      image: Udemy,
    },
    {
      id: 7,
      name: "EMT",
      program: "Foothill Community College",
      image: Foothill,
    },
    {
      id: 8,
      name: "Javascript Tutorial",
      program: "SoloLearn",
      image: SoloLearn,
    },
    {
      id: 9,
      name: "HTML Fundamentals",
      program: "SoloLearn",
      image: SoloLearn,
    },
  ];

  // Group certificates into rows of 3
  const certificateRows = [];
  for (let i = 0; i < certificates.length; i += 3) {
    certificateRows.push(certificates.slice(i, i + 3));
  }

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
      {certificateRows.map((row, rowIndex) => (
        <Grid
          container
          spacing={2}
          key={`row-${rowIndex}`}
          sx={{
            justifyContent: "center",
            maxWidth: "1200px",
            width: "100%",
            mb: 2,
          }}
        >
          {row.map((cert) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={cert.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{ width: "100%", maxWidth: "345px" }}
              >
                <Card sx={{ width: "100%", m: "auto" }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: "300px",
                      height: "200px",
                      objectFit: "cover",
                      m: "auto",
                      p: 1,
                    }}
                    image={
                      cert.image || "https://placehold.co/300x200?text=No+Image"
                    }
                    alt={`${cert.name} Certificate`}
                  />
                  <CardContent sx={{ textAlign: "center", p: 2 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {cert.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {cert.program}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
}
