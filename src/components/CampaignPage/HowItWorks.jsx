import React from "react";
import { Box, Typography, Stepper, Step, StepLabel } from "@mui/material";

const HowItWorks = () => {
  const steps = [
    {
      label: "Register for the Webinar",
      description:
        "Fill out the simple registration form to secure your spot in this empowering campaign.",
    },
    {
      label: "Share About Your Business",
      description:
        "Tell us about your business, your goals, and the specific guidance you're looking for.",
    },
    {
      label: "Receive Personalized Guidance",
      description:
        "Get tailored advice and resources designed to help you start and grow your business.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{
          mb: { xs: 3, sm: 4, md: 4 },
          fontWeight: 700,
          fontSize: { xs: "22px", sm: "24px", md: "28px" },
          px: { xs: 2, sm: 0 },
        }}
      >
        How It Works
      </Typography>

      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "90%" },
          backgroundColor: "#EFF8FF",
          borderRadius: 2,
          py: { xs: 4, sm: 5, md: 6 },
          px: { xs: 1, sm: 3, md: 4 },
        }}
      >
        <Stepper
          activeStep={-1}
          alternativeLabel
          sx={{
            "& .MuiStepLabel-label": {
              mt: 1,
              fontWeight: 600,
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
            },
            "& .MuiStepIcon-root": {
              width: { xs: 28, sm: 36, md: 40 },
              height: { xs: 28, sm: 36, md: 40 },
              color: "#455F76",
              "&.Mui-active": {
                color: "#455F76",
              },
              "&.Mui-completed": {
                color: "#455F76",
              },
            },
            "& .MuiStepConnector-line": {
              borderColor: "#455F76",
              borderTopWidth: 2,
            },
            "& .MuiStepConnector-root": {
              top: { xs: "14px", sm: "18px", md: "20px" },
              left: "calc(-50% + 20px)",
              right: "calc(50% + 20px)",
            },
            "& .MuiStep-root": {
              padding: { xs: "0 8px", sm: "0 24px", md: "0 32px" },
            },
          }}
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>
                <Box
                  sx={{
                    textAlign: "center",
                    mt: { xs: 1, sm: 1.5, md: 2 },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                      fontSize: { xs: "13px", sm: "16px", md: "18px" },
                    }}
                  >
                    {step.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#666",
                      fontSize: { xs: "11px", sm: "13px", md: "14px" },
                      lineHeight: 1.5,
                      mt: 1,
                      maxWidth: { xs: "120px", sm: "225px", md: "250px" },
                      mx: "auto",
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default HowItWorks;
