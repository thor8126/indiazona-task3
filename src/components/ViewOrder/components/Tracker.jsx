import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "0 24px",
  backgroundColor: "#fff",
  borderRadius: "12px",
}));

export default function Tracker({ trackingData, isCancelled, isDelivered }) {
  const renderStatusInfo = () => {
    if (isCancelled) {
      return (
        <>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#EF4444",
                mr: 1,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "#EF4444",
                fontWeight: 500,
              }}
            >
              Cancelled
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#6B7280",
                ml: 1,
              }}
            >
              on {trackingData.shippedDay}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#6B7280",
              mt: 0.5,
            }}
          >
            Refund of ₹{trackingData?.product?.price || "499"} Done
          </Typography>
        </>
      );
    }

    return (
      <>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "#FF6636",
              mr: 1,
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: "black",
              fontWeight: 500,
            }}
          >
            Delivered
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#6B7280",
              ml: 1,
            }}
          >
            on {trackingData.shippedDay}
          </Typography>
        </Box>
        {isDelivered && (
          <Typography
            variant="body2"
            sx={{
              color: "black",
              mt: 0.5,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#FF6636",
                mr: 1,
              }}
            />
            Return window ends{" "}
            <Typography
              variant="body2"
              sx={{
                color: "black",
                ml: 1,
              }}
            >
              by {trackingData.delieveryExpected}
            </Typography>
          </Typography>
        )}
      </>
    );
  };

  return (
    <StyledPaper elevation={0}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography
          sx={{
            fontStyle: "normal",
            fontSize: { xs: "23px", sm: "28px" },
            fontWeight: "500",
            color: "#111827",
            lineHeight: "34px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          Order ID: {trackingData.orderId}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            padding: "9px 14px",
            textTransform: "none",
            borderColor: "#455F76",
            color: "#6B7280",
            "&:hover": {
              borderColor: "#D1D5DB",
              backgroundColor: "transparent",
            },
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8872 15.433H5.72763C3.37359 15.433 2.01921 14.0786 2.01921 11.7246V5.27519C2.01921 2.92115 3.37359 1.56677 5.72763 1.56677H10.8872C13.2412 1.56677 14.5956 2.92115 14.5956 5.27519V11.7246C14.5956 14.0786 13.2412 15.433 10.8872 15.433ZM5.72763 2.53418C3.88309 2.53418 2.98662 3.43065 2.98662 5.27519V11.7246C2.98662 13.5691 3.88309 14.4656 5.72763 14.4656H10.8872C12.7317 14.4656 13.6282 13.5691 13.6282 11.7246V5.27519C13.6282 3.43065 12.7317 2.53418 10.8872 2.53418H5.72763Z"
              fill="#455F76"
            />
            <path
              d="M12.4995 6.72638H11.2096C10.2293 6.72638 9.43604 5.9331 9.43604 4.95279V3.66291C9.43604 3.39848 9.65532 3.1792 9.91974 3.1792C10.1842 3.1792 10.4034 3.39848 10.4034 3.66291V4.95279C10.4034 5.3978 10.7646 5.75897 11.2096 5.75897H12.4995C12.7639 5.75897 12.9832 5.97825 12.9832 6.24267C12.9832 6.5071 12.7639 6.72638 12.4995 6.72638Z"
              fill="#455F76"
            />
            <path
              d="M8.3074 9.62855H5.72763C5.46321 9.62855 5.24393 9.40927 5.24393 9.14484C5.24393 8.88041 5.46321 8.66113 5.72763 8.66113H8.3074C8.57183 8.66113 8.79111 8.88041 8.79111 9.14484C8.79111 9.40927 8.57183 9.62855 8.3074 9.62855Z"
              fill="#455F76"
            />
            <path
              d="M10.8872 12.2083H5.72763C5.46321 12.2083 5.24393 11.989 5.24393 11.7246C5.24393 11.4601 5.46321 11.2408 5.72763 11.2408H10.8872C11.1516 11.2408 11.3709 11.4601 11.3709 11.7246C11.3709 11.989 11.1516 12.2083 10.8872 12.2083Z"
              fill="#455F76"
            />
          </svg>
          Invoice
        </Button>
      </Box>

      {/* Status Section */}
      <Box sx={{ mt: 2, mb: 2 }}>{renderStatusInfo()}</Box>
    </StyledPaper>
  );
}
