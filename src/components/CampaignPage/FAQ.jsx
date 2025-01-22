"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// FAQ data structure
const faqData = [
  {
    question: "Who can be a part of it?",
    answer:
      "Any woman with a passion for entrepreneurship, whether you're starting a business, already running one, or exploring a new idea, is welcome to join this campaign.",
  },
  {
    question: "What are the charges to join it?",
    answer:
      "We offer competitive rates tailored to your needs. Contact us for detailed pricing information.",
  },
  {
    question: "How can I get started?",
    answer:
      "Getting started is easy! Simply register through our platform and follow the guided steps.",
  },
  {
    question: "How do I register?",
    answer:
      "Registration can be completed through our online portal in just a few minutes.",
  },
  {
    question: "Do I need to attend the webinar to get personalized guidance?",
    answer:
      "While recommended, webinar attendance is not mandatory. You can access recorded sessions.",
  },
  {
    question: "When will this happen?",
    answer:
      "Events and programs are scheduled regularly. Check our calendar for upcoming dates.",
  },
  {
    question: "What kind of support will I receive?",
    answer:
      "We provide comprehensive support including technical assistance and mentoring.",
  },
  {
    question: "Will I receive one-on-one mentoring?",
    answer:
      "Yes, one-on-one mentoring sessions are available as part of our program.",
  },
  {
    question:
      "Do I already need to have a business or is the campaign limited to any specific type of business?",
    answer:
      "Our program is open to both existing businesses and new entrepreneurs.",
  },
  {
    question: "Can I join if I don't have a business idea yet?",
    answer:
      "Yes, we welcome participants at all stages, including those still developing their ideas.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Calculate midpoint for equal distribution
  const midPoint = Math.ceil(faqData.length / 2);
  const firstColumn = faqData.slice(0, midPoint);
  const secondColumn = faqData.slice(midPoint);

  // Ensure equal height by adding placeholder if needed
  while (firstColumn.length > secondColumn.length) {
    secondColumn.push({ question: "", answer: "", hidden: true });
  }

  return (
    <Box>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          mb: 6,
          fontWeight: { xs: 600, md: 700 },
          fontSize: { xs: "28px", md: "44px" },
        }}
      >
        FAQ
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {firstColumn.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                mb: 2,
                padding: 2,
                visibility: faq.hidden ? "hidden" : "visible",
                height: faq.hidden ? 0 : "auto",
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: "0 0 16px 0",
                },
                boxShadow:
                  "0px 24.56px 32.74px -14.73px rgba(149, 149, 149, 0.25)",
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${index}` ? <RemoveIcon /> : <AddIcon />
                }
                sx={{
                  padding: "0 16px",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "rgba(69, 95, 118, 1)",
                  flexDirection: "row-reverse",
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "16px",
                  },
                  "& .MuiAccordionSummary-content": {
                    margin: "12px 0",
                  },
                }}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "0 16px 16px 56px",
                  marginTop: "-8px",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "28px",
                  letterSpacing: "0.1px",
                }}
              >
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          {secondColumn.map((faq, index) => (
            <Accordion
              key={index + midPoint}
              expanded={expanded === `panel${index + midPoint}`}
              onChange={handleChange(`panel${index + midPoint}`)}
              sx={{
                padding: 2,
                mb: 2,
                visibility: faq.hidden ? "hidden" : "visible",
                height: faq.hidden ? 0 : "auto",
                boxShadow:
                  "0px 24.56px 32.74px -14.73px rgba(149, 149, 149, 0.25)",
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: "0 0 16px 0",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${index + midPoint}` ? (
                    <RemoveIcon />
                  ) : (
                    <AddIcon />
                  )
                }
                sx={{
                  padding: "0 16px",
                  fontWeight: 600,
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "rgba(69, 95, 118, 1)",
                  flexDirection: "row-reverse",
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    marginRight: "16px",
                  },
                  "& .MuiAccordionSummary-content": {
                    margin: "12px 0",
                  },
                }}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "0 16px 16px 56px",
                  marginTop: "-8px",
                }}
              >
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
