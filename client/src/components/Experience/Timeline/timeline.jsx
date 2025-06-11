import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { motion } from "framer-motion";
import ExperienceData from "../experiences.json";

export default function TimelineComponent({ events = [] }) {
  const timelineEvents = events.length > 0 ? events : ExperienceData;

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      sx={{
        maxWidth: "1200px", // Constrain the width to a reasonable maximum
        margin: "0 auto", // Center the entire component horizontally
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          textAlign: { xs: "center" },
          margin: { xs: "16px 0", sm: "24px 0" },
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        Work
      </Typography>
      <Timeline
        sx={{
          padding: { xs: "0 8px", sm: "0 16px" },
          mb: 6,
          width: "100%",
          "& .MuiTimelineItem-root": {
            paddingLeft: { xs: 0, sm: "16px" },
          },
        }}
      >
        {timelineEvents.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                color: "text.secondary",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center horizontally
                textAlign: "center", // Center text
                typography: { xs: "caption", sm: "body2" }, // Smaller text on mobile
                flex: { xs: 0.01, sm: 0.15 }, // Narrower on mobile (xs), slightly wider on larger screens (sm)
                padding: { xs: "6px 4px", sm: "6px 8px" }, // Reduce padding on mobile for compactness
              }}
            >
              {event.year}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: "primary.main",
                  margin: { xs: "6px 0", sm: "6px 0" },
                }}
              />
              {index < timelineEvents.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                padding: { xs: "6px 8px", sm: "6px 16px" },
                display: "flex",
                alignItems: "center",
              }}
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                style={{ width: "100%" }}
              >
                <Card
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", sm: "80%" },
                    minHeight: "150px",
                    boxShadow: 3,
                    borderRadius: 2,
                  }}
                >
                  <CardContent
                    sx={{
                      padding: { xs: "16px", sm: "20px" },
                    }}
                  >
                    <Typography variant="h6" component="div" gutterBottom>
                      {event.position}
                    </Typography>
                    <Typography variant="h6" component="div" gutterBottom>
                      {event.workplace}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                      {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
