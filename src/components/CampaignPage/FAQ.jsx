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
      "It is totally FREE to register and become a part of this campaign.",
  },
  {
    question: "When will this happen?",
    answer:
      "Events and programs are scheduled regularly. You will be notified via mail for all the updates.",
  },
  {
    question: "What kind of support will I receive?",
    answer:
      "You will receive personalized guidance tailored to your business needs, from experts in the industry, including resources, marketing support, and visibility on Indiazona.",
  },
  {
    question: "Will I receive one-on-one mentoring?",
    answer:
      "Yes, you will have access to personalized one-on-one mentoring and consultations, helping you at every step of your business journey.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply register for the campaign through our website, fill out the form, and attend the introductory webinar to kickstart your journey.",
  },
  {
    question:
      "Do I already need to have a business or is the campaign limited to any specific type of business?",
    answer:
      "No, you don’t need a business already. The campaign is open to anyone who wants to start or grow a business, regardless of the type or stage.",
  },
  {
    question: "How do I register?",
    answer:
      "You can register by visiting the Indiazona website or through the campaign registration link available on our social media platforms.",
  },
  {
    question: "Can I join if I don’t have a business idea yet?",
    answer:
      "Absolutely! If you’re exploring business ideas, you can still join and get guidance on how to start and shape your vision.",
  },
  {
    question: "Do I need to attend the webinar to get personalized guidance?",
    answer:
      "Yes, attending the webinar is crucial to receiving personalized guidance and support. It’s your first step to start receiving tailored advice.",
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
