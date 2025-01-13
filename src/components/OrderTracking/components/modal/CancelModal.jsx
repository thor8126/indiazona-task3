import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

const CancelModal = ({ orderId, open, onClose, onConfirm, cancelImg }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box sx={{ padding: 6, textAlign: "center" }}>
        <Box
          sx={{
            width: 80,
            height: 80,
            margin: "0 auto",
            mb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ color: "#ff9999" }}>
            <img width={135} src={cancelImg} alt="Cancel" />
          </Typography>
        </Box>

        <DialogTitle
          sx={{
            p: 0,
            mb: 1,
            fontSize: "1.1rem",
            fontWeight: 500,
          }}
        >
          Do you really want to cancel the product?
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          <Typography variant="body2" color="##212121">
            Order ID:
            <Typography
              component="span"
              sx={{ fontSize: "18px", fontWeight: 500 }}
            >
              {" "}
              {orderId}
            </Typography>
          </Typography>
        </DialogContent>

        <DialogActions
          sx={{
            justifyContent: "space-between",
            px: 0,
            pt: 3,
          }}
        >
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              flex: 1,
              mr: 1,
              bgcolor: "#ff9966",
              "&:hover": {
                bgcolor: "#ff8533",
              },
            }}
          >
            No
          </Button>
          <Button
            variant="outlined"
            onClick={onConfirm}
            sx={{
              flex: 1,
              ml: 1,
              color: "text.primary",
              borderColor: "divider",
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default CancelModal;
