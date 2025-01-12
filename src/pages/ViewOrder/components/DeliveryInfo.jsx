import React from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import HelpOptions from "./HelpOptions"; // Import the HelpOptions component

export default function DeliveryInfo({
  deliveryInfo,
  isCancelled,
  setIsCancelledModalOpen,
  isDelivered,
  onReturnOrder,
  onFeedback,
  onChat,
  onNotHappy,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Paper
        elevation={0}
        sx={{
          paddingX: { xs: 2, sm: 3 },
          paddingY: { xs: 1, sm: 3 },
          flex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: { xs: "100%", sm: "80%" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Delivery</Typography>
          <Button
            sx={{
              fontSize: "12px",
              fontWeight: "regular",
              padding: "4px 14px",
              textTransform: "none",
              borderColor: "#D1D5DB",
              color: "#6B7280",
              "&:hover": {
                borderColor: "#455F76",
              },
            }}
            variant="outlined"
          >
            Change
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2,
            color: "#455F76",
          }}
        >
          <Typography variant="body2" color="black">
            Address
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "medium",
            }}
          >
            {deliveryInfo.address}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "medium",
            }}
          >
            {deliveryInfo.city}, {deliveryInfo.country}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "medium",
            }}
          >
            {deliveryInfo.phone}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: "medium",
            }}
          >
            Mob: {deliveryInfo.mobile}
          </Typography>
        </Box>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 3 },
          flex: 1,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6">Details Shared</Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.875 5.75008L10.8025 9.53091C11.0011 9.68205 11.2469 9.76426 11.5 9.76426C11.7531 9.76426 11.9989 9.68205 12.1975 9.53091L17.125 5.75008M20.5 16.5834H2.5C2.20163 16.5834 1.91548 16.4693 1.7045 16.2661C1.49353 16.0629 1.375 15.7874 1.375 15.5001V2.50008C1.375 2.21276 1.49353 1.93721 1.7045 1.73405C1.91548 1.53088 2.20163 1.41675 2.5 1.41675H20.5C20.7984 1.41675 21.0845 1.53088 21.2955 1.73405C21.5065 1.93721 21.625 2.21276 21.625 2.50008V15.5001C21.625 15.7874 21.5065 16.0629 21.2955 16.2661C21.0845 16.4693 20.7984 16.5834 20.5 16.5834Z"
                stroke="#455F76"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "20px",
                color: "#455F76",
                lineHeight: 1,
              }}
            >
              sidborekar07@gmail.com
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.3749 14.875V19.2963C22.3786 19.6213 22.3066 19.9433 22.1639 20.2399C22.0212 20.5366 21.8111 20.8009 21.5481 21.0148C21.2851 21.2286 20.9755 21.3868 20.6406 21.4786C20.3056 21.5703 19.9533 21.5934 19.6078 21.5463C14.8192 20.9736 10.3713 18.9337 6.96502 15.7481C3.55876 12.5625 1.38776 8.41223 0.794101 3.95128C0.743618 3.6306 0.768145 3.30355 0.866002 2.99251C0.963859 2.68148 1.13274 2.39379 1.36108 2.14915C1.58942 1.90451 1.87183 1.70868 2.18899 1.57507C2.50615 1.44147 2.85057 1.37323 3.19868 1.37503H7.87493C8.17365 1.37335 8.46245 1.47474 8.6856 1.65964C8.90874 1.84455 9.05041 2.09985 9.08327 2.37629C9.20317 3.85068 9.61274 5.29206 10.2916 6.62878C10.408 6.88194 10.4206 7.16606 10.3271 7.42731C10.2336 7.68855 10.0404 7.90879 9.7841 8.04629L8.74493 8.59753C8.59515 8.67423 8.46455 8.77965 8.36176 8.90682C8.25897 9.03399 8.18633 9.18002 8.14864 9.33526C8.11095 9.4905 8.10907 9.65142 8.14313 9.80738C8.17718 9.96335 8.24639 10.1108 8.34618 10.24C9.54162 11.8704 11.0538 13.2783 12.8049 14.3913C12.9437 14.4842 13.1021 14.5486 13.2696 14.5803C13.4372 14.612 13.61 14.6103 13.7767 14.5752C13.9435 14.5401 14.1003 14.4725 14.2369 14.3768C14.3735 14.2811 14.4867 14.1595 14.5691 14.02L15.1612 13.0525C15.3177 12.8108 15.5661 12.6327 15.857 12.5535C16.148 12.4743 16.4603 12.4998 16.732 12.625C18.1678 13.2571 19.7159 13.6384 21.2995 13.75C21.5964 13.7806 21.8706 13.9125 22.0692 14.1203C22.2678 14.328 22.3767 14.5969 22.3749 14.875Z"
                stroke="#455F76"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "20px",
                color: "#455F76",
                lineHeight: 1,
              }}
            >
              +91 7500547650
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: "10px" }}>
          <Typography variant="h6">Need Help</Typography>
          <HelpOptions
            isDelivered={isDelivered}
            isCancelled={isCancelled}
            onReturnOrder={onReturnOrder}
            onFeedback={onFeedback}
            onChat={onChat}
            onNotHappy={onNotHappy}
            setIsCancelledModalOpen={setIsCancelledModalOpen}
          />
        </Box>
      </Paper>
    </Box>
  );
}
