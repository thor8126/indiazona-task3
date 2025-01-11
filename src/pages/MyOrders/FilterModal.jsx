import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Typography,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FilterModal = ({ open, onClose, onApplyFilters }) => {
  const [status, setStatus] = useState("All");
  const [timeFrame, setTimeFrame] = useState("Anytime");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  const handleClearFilters = () => {
    setStatus("All");
    setTimeFrame("Anytime");
  };

  const handleApply = () => {
    onApplyFilters({ status, timeFrame });
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: "12px",
          m: 2,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Filter Orders
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: 3, py: 2 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
            Status
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup value={status} onChange={handleStatusChange}>
              <FormControlLabel
                value="All"
                control={<Radio sx={{ color: "#455F76" }} />}
                label="All"
              />
              <FormControlLabel
                value="Delivered"
                control={<Radio sx={{ color: "#455F76" }} />}
                label="Delivered"
              />
              <FormControlLabel
                value="Cancelled"
                control={<Radio sx={{ color: "#455F76" }} />}
                label="Cancelled"
              />
              <FormControlLabel
                value="Returned"
                control={<Radio sx={{ color: "#455F76" }} />}
                label="Returned"
              />
              <FormControlLabel
                value="On the way"
                control={<Radio sx={{ color: "#455F76" }} />}
                label="On the way"
              />
            </RadioGroup>
          </FormControl>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box>
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
            Time
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup value={timeFrame} onChange={handleTimeFrameChange}>
              <FormControlLabel
                value="Anytime"
                control={<Radio sx={{ color: "#455F76" }} />}
                label="Anytime"
              />
              <FormControlLabel
                value="Last 30 days"
                control={<Radio sx={{ color: "#455F76" }} />}
                label="Last 30 days"
              />
              <FormControlLabel
                value="Last 6 months"
                control={<Radio sx={{ color: "#455F76" }} />}
                label="Last 6 months"
              />
              <FormControlLabel
                value="Last year"
                control={<Radio sx={{ color: "#455F76" }} />}
                label="Last year"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2, gap: 2 }}>
        <Button
          onClick={handleClearFilters}
          sx={{
            flex: 1,
            color: "#455F76",
            border: "1px solid #455F76",
            "&:hover": {
              border: "1px solid #455F76",
              backgroundColor: "rgba(69, 95, 118, 0.04)",
            },
          }}
          variant="outlined"
        >
          Clear Filters
        </Button>
        <Button
          onClick={handleApply}
          sx={{
            flex: 1,
            backgroundColor: "#FF944E",
            color: "white",
            "&:hover": {
              backgroundColor: "#ff7043",
            },
          }}
          variant="contained"
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FilterModal;
