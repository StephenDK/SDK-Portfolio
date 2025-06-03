import * as React from "react";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CSUEB from "../../../images/education/CSUEB.svg";
import DAC_BLACK from "../../../images/education/DAC_Logo_Black.png";
import DAC_WHITE from "../../../images/education/DAC_Logo_White.png";
import { ThemeContext } from "../../../themeContext";

export default function Schools() {
  const theme = useTheme();
  const { mode } = useContext(ThemeContext);

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

  const deAnzaLogo = mode === "dark" ? DAC_WHITE : DAC_BLACK;

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
            image={CSUEB}
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
                B.S Computer Science
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
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
                Liberal Arts Math, Science, Engineering Emphasis
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </motion.div>
    </Box>
  );
}
