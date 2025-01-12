import React from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
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
          }}
        >
          <Typography variant="body2" color="text.secondary">
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
      </Paper>
    </Box>
  );
}
