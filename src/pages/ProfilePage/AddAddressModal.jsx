import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  Box,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Custom styled radio for the exact visual match
const StyledRadio = styled(Radio)(({ theme }) => ({
  padding: "6px",
  "&.MuiRadio-root": {
    color: "#E0E0E0",
  },
  "&.Mui-checked": {
    color: "#5C7891",
  },
}));

// Custom styled form control label for exact spacing
const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: "-6px",
  marginRight: 0,
  marginBottom: "16px",
  "& .MuiFormControlLabel-label": {
    width: "100%",
  },
}));

const AddAddressModal = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    landmark: "",
    alternateNumber: "",
    addressType: "home",
    customAddressType: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  // Address type section component
  const AddressTypeSection = () => (
    <Box sx={{ mt: 2 }}>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          color: "#212121",
          fontWeight: 500,
        }}
      >
        Address Type
      </Typography>
      <RadioGroup
        name="addressType"
        value={formData.addressType}
        onChange={handleChange}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ display: "flex", gap: 4, mb: 2 }}>
          <StyledFormControlLabel
            value="home"
            control={<StyledRadio />}
            label={
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#212121",
                    fontWeight: formData.addressType === "home" ? 500 : 400,
                  }}
                >
                  Home
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: "#757575",
                    mt: 0.5,
                  }}
                >
                  Deliver in any time
                </Typography>
              </Box>
            }
          />
          <StyledFormControlLabel
            value="work"
            control={<StyledRadio />}
            label={
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#212121",
                    fontWeight: formData.addressType === "work" ? 500 : 400,
                  }}
                >
                  Work
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    color: "#757575",
                    mt: 0.5,
                  }}
                >
                  Only Delivery between 10 AM - 5 PM
                </Typography>
              </Box>
            }
          />
        </Box>
        <StyledFormControlLabel
          value="other"
          control={<StyledRadio />}
          label={
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: "#212121",
                  fontWeight: formData.addressType === "other" ? 500 : 400,
                }}
              >
                Other
              </Typography>
            </Box>
          }
        />
        {formData.addressType === "other" && (
          <TextField
            name="customAddressType"
            placeholder="Type your Address"
            fullWidth
            value={formData.customAddressType}
            onChange={handleChange}
            size="small"
            sx={{
              ml: 4,
              mt: 1,
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#FAFAFA",
              },
            }}
          />
        )}
      </RadioGroup>
    </Box>
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Add New Address
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" gap={2}>
              <TextField
                name="name"
                label="Name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                size="small"
              />
              <TextField
                name="mobileNumber"
                label="Mobile Number"
                fullWidth
                value={formData.mobileNumber}
                onChange={handleChange}
                size="small"
              />
            </Box>

            <Box display="flex" gap={2}>
              <TextField
                name="pincode"
                label="Pincode"
                fullWidth
                value={formData.pincode}
                onChange={handleChange}
                size="small"
              />
              <TextField
                name="locality"
                label="Locality"
                fullWidth
                value={formData.locality}
                onChange={handleChange}
                size="small"
              />
            </Box>

            <TextField
              name="address"
              label="Address (Area & Street)"
              multiline
              rows={3}
              fullWidth
              value={formData.address}
              onChange={handleChange}
              size="small"
            />

            <Box display="flex" gap={2}>
              <TextField
                name="city"
                label="City / District"
                fullWidth
                value={formData.city}
                onChange={handleChange}
                size="small"
              />
              <FormControl fullWidth size="small">
                <InputLabel>State</InputLabel>
                <Select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  label="State"
                  displayEmpty
                  placeholder="Select from Dropdown"
                  renderValue={(selected) => {
                    if (!selected) {
                      return "Select from Dropdown";
                    }
                    return selected;
                  }}
                >
                  <MenuItem sx={{ color: "#455F76" }} value="" disabled>
                    Select from Dropdown
                  </MenuItem>
                  <MenuItem value="state1">State 1</MenuItem>
                  <MenuItem value="state2">State 2</MenuItem>
                  <MenuItem value="state3">State 3</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box display="flex" gap={2}>
              <TextField
                name="landmark"
                label="Landmark (Optional)"
                fullWidth
                value={formData.landmark}
                onChange={handleChange}
                size="small"
              />
              <TextField
                name="alternateNumber"
                label="Alternate Mobile Number (optional)"
                fullWidth
                value={formData.alternateNumber}
                onChange={handleChange}
                size="small"
              />
            </Box>

            <AddressTypeSection />
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2.5, gap: 2 }}>
          <Button
            onClick={onClose}
            variant="outlined"
            sx={{
              flex: 1,
              textTransform: "none",
              borderColor: "#E0E0E0",
              color: "#212121",
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{
              flex: 1,
              bgcolor: "#ff7043",
              "&:hover": { bgcolor: "#f4511e" },
              textTransform: "none",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddAddressModal;
