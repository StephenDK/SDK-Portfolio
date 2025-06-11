import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121212",
        zIndex: 9999,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <motion.div
          animate={{
            y: [0, -20, 0, -20, 0], // Two bounces
            rotate: [0, 0, 0, 0, 360], // Spin after bounces
          }}
          transition={{
            duration: 2.5,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            ease: ["easeOut", "easeIn", "easeOut", "easeIn", "linear"],
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
        >
          <Typography
            sx={{
              color: "#ffffff",
              fontWeight: "bold",
              fontFamily: "monospace",
              fontSize: { xs: "2rem", sm: "3rem" },
            }}
          >
            &lt;SDK/&gt;
          </Typography>
        </motion.div>
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: "monospace",
            fontSize: { xs: "1rem", sm: "1.25rem" },
            mt: 1,
          }}
        >
          Loading...
        </Typography>
      </Box>
    </Box>
  );
};

export default LoadingScreen;
