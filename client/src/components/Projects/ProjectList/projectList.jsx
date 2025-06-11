import * as React from "react";
import { useEffect } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: "345px",
  margin: "auto",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[8],
  },
  display: "flex",
  flexDirection: "column",
  height: "520px",
}));

const CardLink = styled("a")({
  textDecoration: "none",
  color: "inherit",
  display: "block",
  width: "100%",
});

const getLanguageIcon = (language) => {
  switch (language) {
    case "html":
      return (
        <img
          src="/images/icons/html.svg"
          alt="HTML"
          style={{ width: 32, height: 32 }}
        />
      );
    case "css":
      return (
        <img
          src="/images/icons/css.svg"
          alt="CSS"
          style={{ width: 32, height: 32 }}
        />
      );
    case "javascript":
      return (
        <img
          src="/images/icons/javascript.svg"
          alt="JavaScript"
          style={{ width: 32, height: 32 }}
        />
      );
    case "react":
      return (
        <img
          src="/images/icons/react.svg"
          alt="React"
          style={{ width: 32, height: 32 }}
        />
      );
    case "node":
      return (
        <img
          src="/images/icons/nodejs.svg"
          alt="Node.js"
          style={{ width: 32, height: 32 }}
        />
      );
    case "redux":
      return (
        <img
          src="/images/icons/redux.svg"
          alt="Redux"
          style={{ width: 32, height: 32 }}
        />
      );
    case "github":
      return (
        <img
          src="/images/icons/github.svg"
          alt="Github"
          style={{ width: 32, height: 32 }}
        />
      );
    case "material-ui":
      return (
        <img
          src="/images/icons/materialui.svg"
          alt="Material UI"
          style={{ width: 32, height: 32 }}
        />
      );
    case "jest":
      return (
        <img
          src="/images/icons/jest.svg"
          alt="Jest"
          style={{ width: 32, height: 32 }}
        />
      );
    default:
      return null;
  }
};

const getProjectImage = (title) => {
  switch (title) {
    case "TrackerApp":
      return "/images/projects/trackerapp.png";
    case "Urban Gold":
      return "/images/projects/urban-gold.png";
    case "SDK Portfolio":
      return "/images/projects/sdk-portfolio.png";
    case "CSU EB Pioneer Polls":
      return "/images/projects/pioneer-polls.png";
    case "SCCGOV ROV Election Timer":
      return "/images/projects/rov-timer.png";
    default:
      return "https://placehold.co/300x200";
  }
};

export default function ProjectsList() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const imageUrls = [
      "/images/projects/trackerapp.png",
      "/images/projects/urban-gold.png",
      "/images/projects/sdk-portfolio.png",
      "/images/projects/pioneer-polls.png",
      "/images/projects/rov-timer.png",
      "/images/icons/html.svg",
      "/images/icons/css.svg",
      "/images/icons/javascript.svg",
      "/images/icons/react.svg",
      "/images/icons/nodejs.svg",
      "/images/icons/github.svg",
      "/images/icons/redux.svg",
      "/images/icons/materialui.svg",
      "/images/icons/jest.svg",
    ];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const projects = [
    {
      id: 1,
      title: "TrackerApp",
      description:
        "Tracker App is an inventory management tool developed for the County of Santa Clara. Designed to streamline the check-in and check-out of devices, the app offers real-time reporting to improve tracking, accountability, and overall efficiency in managing equipment.",
      url: "https://trackerapp-clone.onrender.com",
      languages: ["react", "node", "redux", "material-ui", "github"],
    },
    {
      id: 2,
      title: "Urban Gold",
      description:
        "Urban Gold is a custom-built app developed for a small business to support the installation of industrial flooring. The app allows users to create, view, and follow step-by-step instructions, ensuring consistency, accuracy, and efficiency on job sites.",
      url: "https://example.com/",
      languages: ["react", "node", "redux", "material-ui", "github"],
    },
    {
      id: 3,
      title: "SDK Portfolio",
      description:
        "SDK Portfolio is a showcase app designed to highlight my skills as a full-stack engineer and UI/UX developer. Built for reusability and customization, it allows others to easily clone and adapt the project as a foundation for their own portfolios.",
      url: "https://example.com/",
      languages: ["react", "node", "material-ui", "github"],
    },
    {
      id: 4,
      title: "CSU EB Pioneer Polls",
      description:
        "Pioneer Polls is a student-focused polling app developed as my senior project. The app allows students to log in, create polls, and submit ratings on various topics, making it easy to gather opinions and engage with peers in a simple, interactive way.",
      url: "https://survey-project-0fxp.onrender.com/",
      languages: ["react", "node", "redux", "jest", "github"],
    },
    {
      id: 5,
      title: "SCCGOV ROV Election Timer",
      description:
        "SCCGOV ROV Timer is a public-facing countdown app developed to support major elections. It displays the time remaining until polls close, helping voters stay informed and encouraging timely participation in the democratic process.",
      url: "https://iframetimer.onrender.com/",
      languages: ["html", "javascript", "css", "node"],
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
        My Projects
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
        {projects.map((project) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={project.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              style={{ width: "100%", maxWidth: "345px" }}
            >
              <CardLink
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledCard>
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: "100%", sm: "100%" },
                      objectFit: "cover",
                      m: "auto",
                      p: 1,
                      height: 200,
                    }}
                    image={getProjectImage(project.title)}
                    alt={`${project.title} Preview`}
                  />
                  <CardContent
                    sx={{
                      textAlign: "center",
                      p: 2,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        mb: 2,
                        flexGrow: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                        pt: 1,
                        borderTop: 1,
                        borderColor: "divider",
                      }}
                    >
                      {project.languages.map((lang, index) => (
                        <IconButton key={index} size="large" aria-label={lang}>
                          {getLanguageIcon(lang)}
                        </IconButton>
                      ))}
                    </Box>
                  </CardContent>
                </StyledCard>
              </CardLink>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
