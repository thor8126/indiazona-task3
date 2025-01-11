import React from "react";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
    left: "calc(-50% + 10px)",
    right: "calc(50% + 10px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#4CAF50",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#4CAF50",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
}));

const CustomStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#eaeaf0",
  zIndex: 1,
  color: "#fff",
  width: 12,
  height: 12,
  borderRadius: "50%",
  ...(ownerState.active && {
    backgroundColor: "#4CAF50",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#4CAF50",
  }),
}));

function CustomStepIcon(props) {
  const { active, completed, className } = props;
  return (
    <CustomStepIconRoot
      ownerState={{ active, completed }}
      className={className}
    ></CustomStepIconRoot>
  );
}

const StepperComponent = () => {
  const steps = [
    { label: "Order Confirmed", date: "Tue, 24th Dec", time: "at 6:12 AM" },
    { label: "Shipped", date: "", time: "" },
    { label: "Out For Delivery", date: "", time: "" },
    { label: "Delivered", date: "Expected by, Mon 30th", time: "" },
  ];

  const activeStep = 2; // 0-based index, so 2 means third step is active

  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<CustomConnector />}
      sx={{ width: "100%", maxWidth: 800 }}
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel StepIconComponent={CustomStepIcon}>
            <Typography variant="body2" sx={{ color: "text.primary" }}>
              {step.label}
            </Typography>
            {step.date && (
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", display: "block" }}
              >
                {step.date}
                {step.time && (
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block" }}
                  >
                    {step.time}
                  </Typography>
                )}
              </Typography>
            )}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
