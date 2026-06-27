"use client";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";

import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    period: "2025 - Present",
    description:
      "Building scalable web applications using Next.js, Spring Boot, MySQL and JavaFX.",
    // points: [
    //   "Developed and maintained production React.js applications.",
    //   "Integrated backend services built with Laravel and Spring Boot.",
    //   "Built a cross-platform React Native mobile application.",
    //   "Collaborated with cross-functional teams and participated in feature development.",
    // ],
  },
  {
    title: "Full-Stack Developer",
    company: "School Projects",
    period: "2024 - 2025",
    description:
      "Developed responsive websites with React, Next.js and Tailwind CSS.",
    points: [
      "Designed and developed custom web applications using Next.js, React, Spring Boot, and PHP.",
      "Built secure REST APIs with JWT authentication and role-based access control.",
      "Designed MySQL and PostgreSQL database schemas for scalable applications.",
      "Collaborated directly with clients to gather requirements, plan features, and deliver production-ready solutions.",
      "Optimized application performance, accessibility, and SEO.",
      "Maintained deployed applications and provided ongoing feature enhancements and bug fixes.",
    ],
  },
  {
    title: "Software Developer",
    company: "ICT Star Group Myanmar Co., Ltd.",
    period: "2022 - 2024",
    description:
      "Developed responsive websites, mobile Apps with React, Laravel, Tailwind CSS and React Native.",
    points: [
      "Developed and maintained production React.js applications.",
      "Integrated backend services built with Laravel and Spring Boot.",
      "Built a cross-platform React Native mobile application.",
      "Collaborated with cross-functional teams and participated in feature development.",
    ],
  },
];

export default function ExperienceTimeline() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section
      id="timeline"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16"
    >
      <Timeline
        position="right"
        sx={{
          p: 0,
          "& .MuiTimelineItem-root::before": {
            display: "none",
          },
        }}
      >
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            sx={{
              alignItems: "stretch",
            }}
          >
            <TimelineSeparator
              sx={
                {
                  // mt: 4,
                  // justifyContent: "center",
                  // alignItems: "center",
                }
              }
            >
              <TimelineDot
                sx={{
                  bgcolor: "#ff6b00",
                  boxShadow: "0 0 12px rgba(255,107,0,.5)",
                }}
              />
              {index !== experiences.length - 1 && (
                <TimelineConnector
                  sx={{
                    bgcolor: "#ff6b00",
                    width: 3,
                    flexGrow: 1,
                  }}
                />
              )}
            </TimelineSeparator>

            <TimelineContent sx={{ py: 0, px: 3, mt: 2 }}>
              <Paper
                elevation={0}
                onClick={() => handleExpand(index)}
                sx={{
                  cursor: "pointer",
                  p: 3,
                  bgcolor: "#1a1a1a",
                  color: "#fff",
                  borderRadius: 3,
                  border: "1px solid rgba(255,107,0,.25)",
                  transition: ".3s",

                  "&:hover": {
                    borderColor: "#ff6b00",
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 30px rgba(255,107,0,.15)",
                  },
                }}
              >
                <Typography sx={{ fontSIze: 22 }}>{exp.title}</Typography>

                <Typography color="#ff6b00">{exp.company}</Typography>

                <Typography variant="body2" color="gray" sx={{ mb: 2 }}>
                  {exp.period}
                </Typography>

                <Typography color="#ddd" sx={{ mt: 2 }}>
                  {exp.description}
                </Typography>

                {exp.points && exp.points.length > 0 && (
                  <Box
                    sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}
                  >
                    {expanded === index ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </Box>
                )}

                {exp.points && exp.points.length > 0 && (
                  <Collapse in={expanded === index} timeout={400}>
                    <List dense>
                      {exp.points?.map((point, i) => (
                        <ListItem key={i} disablePadding sx={{ py: 0.5 }}>
                          <ListItemIcon
                            sx={{
                              minWidth: 22,
                            }}
                          >
                            <FiberManualRecordIcon
                              sx={{
                                fontSize: 8,
                                color: "#ff6b00",
                              }}
                            />
                          </ListItemIcon>

                          <ListItemText
                            primary={point}
                            sx={{
                              color: "#ddd",
                              fontSize: 14,
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
