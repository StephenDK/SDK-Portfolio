import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

export default function TimelineComponent({ events = [] }) {
  // Default events if none provided
  const defaultEvents = [
    {
      workplace: "County of Santa Clara",
      position: "Information Technology Specialist",
      description:
        "An IT Specialist is responsible for managing, supporting, and maintaining an organization’s technology infrastructure. This includes troubleshooting hardware and software issues, setting up and configuring systems, ensuring network and data security, and providing technical support to end-users. The role often involves collaborating with other departments to implement technology solutions that improve operational efficiency and align with business goals.",
      year: "2024",
    },
    {
      workplace: "Tech Corp",
      position: "Software Engineer",
      description:
        "An IT Specialist is responsible for managing, supporting, and maintaining an organization’s technology infrastructure. This includes troubleshooting hardware and software issues, setting up and configuring systems, ensuring network and data security, and providing technical support to end-users. The role often involves collaborating with other departments to implement technology solutions that improve operational efficiency and align with business goals.",
      year: "2024",
    },
    {
      workplace: "City Hospital",
      position: "Systems Analyst",
      description:
        "Analyzed and optimized hospital IT systems to ensure seamless operation of patient management software. Provided training and support to staff on new technology implementations.",
      year: "2024",
    },
  ];

  const timelineEvents = events.length > 0 ? events : defaultEvents;

  return (
    <div>
      <div>
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
      </div>
      <div>
        <Timeline
          sx={{
            padding: { xs: "0 8px", sm: "0 16px" },
            margin: 0,
            "& .MuiTimelineItem-root": {
              paddingLeft: { xs: 0, sm: "16px" },
            },
            "& .MuiTimelineItem-missingOppositeContent:before": {
              display: "none", // Remove extra padding
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
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
