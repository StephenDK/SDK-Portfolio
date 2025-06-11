import React, { useContext, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../../themeContext";

export default function Schools() {
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    const imageUrls = [
      "/images/education/CSUEB.svg",
      "/images/education/DAC_Logo_Black.png",
      "/images/education/DAC_Logo_White.png",
    ];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const deAnzaLogo =
    mode === "dark"
      ? "/images/education/DAC_Logo_White.png"
      : "/images/education/DAC_Logo_Black.png";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        gap: 4,
        mt: 1,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Degrees Received
      </Typography>
      <motion.div
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={rightVariants}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "90%", sm: "75%" },
            maxWidth: "75%",
            m: "auto",
            p: { xs: 1, sm: 0 },
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", sm: 200 },
              height: 200,
              objectFit: "contain",
              m: "auto",
            }}
            image="/images/education/CSUEB.svg"
            alt="California State University East Bay"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", sm: "auto" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", p: 2 }}>
              <Typography component="div" variant="h5">
                California State University East Bay
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                B.S - Computer Science
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                During my undergraduate studies in Computer Science, I gained a
                strong foundation in both theoretical and practical aspects of
                computing. My coursework covered a wide range of topics
                including programming, software engineering, operating systems,
                data structures, web and mobile development, computer networks,
                artificial intelligence, and computer hardware architecture. I
                developed skills in designing, implementing, and evaluating
                software systems, while also learning to analyze computational
                problems using mathematical and algorithmic principles. Through
                collaborative projects and individual assignments, I learned to
                apply current industry tools and technologies, while adhering to
                ethical and professional standards. This program equipped me to
                think critically, work effectively in team settings, and
                communicate technical concepts clearly. My academic performance
                earned me a place on the Dean’s List, reflecting my commitment
                to excellence and continuous learning in the field of Computer
                Science.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </motion.div>

      <motion.div
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={leftVariants}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "90%", sm: "75%" },
            maxWidth: "75%",
            m: "auto",
            p: { xs: 1, sm: 0 },
          }}
        >
          <CardMedia
            component="img"
            salty
            sx={{
              width: { xs: "100%", sm: 200 },
              height: 200,
              objectFit: "contain",
              m: "auto",
            }}
            image={deAnzaLogo}
            alt="De Anza Community College"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", sm: "auto" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", p: 2 }}>
              <Typography component="div" variant="h5">
                De Anza Community College
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                AA - Liberal Arts (Science, Math and Engineering Emphasis)
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                This degree provided a strong interdisciplinary foundation in
                mathematics, science, and engineering, while developing
                essential skills in critical thinking, quantitative reasoning,
                and problem solving. I completed coursework designed for
                transfer to a four-year university, gaining exposure to
                scientific principles, mathematical analysis, and engineering
                concepts. The program also emphasized effective communication,
                collaboration, and adaptability—skills that are essential in
                today’s diverse and evolving workforce. Through a broad-based
                education, I learned to approach problems from multiple
                perspectives and apply logical reasoning across technical and
                real-world challenges. This experience has prepared me to
                continue growing in both academic and professional environments
                where technical skills and versatility are highly valued.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </motion.div>
    </Box>
  );
}
