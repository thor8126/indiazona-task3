import React, { useState, forwardRef, useImperativeHandle } from "react";
import {
  TextField,
  MenuItem,
  Box,
  InputLabel,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)({
  padding: "8px",
  "& .MuiInputBase-root": {
    "&::before": {
      borderBottom: "1px solid #E2E4E5",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid rgba(0, 0, 0, 0.87)",
    },
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgba(7, 5, 5, 0.87)",
  },
  "& .MuiInputBase-input": {
    padding: "8px 2px",
  },
  "& .MuiSelect-select.Mui-rendered-empty": {
    color: "#D0D0D0",
  },
  "& .MuiSelect-select span": {
    color: "#D0D0D0",
  },
});

const StyledInputLabel = styled(InputLabel)({
  position: "relative",
  transform: "none",
  fontSize: "14px",
  fontWeight: 500,
  color: "black",
  marginBottom: "5px",
});

const Form = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    business_type: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const businessTypes = [
    "Aspiring Entrepreneur Without a Defined Plan",
    "Entrepreneur with an Idea but Seeking Launch Assistance",
    "Existing Entrepreneur Aiming to Scale Up",
  ];

  const handleChange = (e) => {
    const { name, id, value } = e.target;
    const fieldName = name || id;

    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    if (errors[fieldName]) {
      setErrors((prev) => ({ ...prev, [fieldName]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.mobile) newErrors.mobile = "Mobile is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.business_type)
      newErrors.business_type = "Business type is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (formData.mobile && !mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async () => {
    if (!validateForm()) return false;

    try {
      const response = await fetch(
        "http://localhost:8000/api/campaign/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      setSnackbar({
        open: true,
        message: "Registration successful!",
        severity: "success",
      });

      setFormData({
        name: "",
        mobile: "",
        email: "",
        business_type: "",
        description: "",
      });

      if (props.onSubmitSuccess) {
        props.onSubmitSuccess();
      }
      return true;
    } catch (error) {
      setSnackbar({
        open: true,
        message: error.message,
        severity: "error",
      });
      return false;
    }
  };

  useImperativeHandle(ref, () => ({
    submitForm,
  }));

  return (
    <Box>
      <StyledInputLabel htmlFor="name">Name</StyledInputLabel>
      <StyledTextField
        id="name"
        name="name"
        placeholder="Write your name here"
        variant="standard"
        fullWidth
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
      />

      <StyledInputLabel htmlFor="mobile">Mobile</StyledInputLabel>
      <StyledTextField
        id="mobile"
        name="mobile"
        placeholder="Write your mobile number here"
        variant="standard"
        fullWidth
        value={formData.mobile}
        onChange={handleChange}
        error={!!errors.mobile}
        helperText={errors.mobile}
      />

      <StyledInputLabel htmlFor="email">Email</StyledInputLabel>
      <StyledTextField
        id="email"
        name="email"
        placeholder="Write your Email ID here"
        type="email"
        variant="standard"
        fullWidth
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
      />

      <StyledInputLabel htmlFor="business_type">Business Type</StyledInputLabel>
      <StyledTextField
        id="business_type"
        name="business_type"
        select
        fullWidth
        value={formData.business_type}
        onChange={handleChange}
        variant="standard"
        error={!!errors.business_type}
        helperText={errors.business_type}
        SelectProps={{
          displayEmpty: true,
          renderValue: (value) =>
            value === "" ? (
              <span style={{ color: "#D0D0D0" }}>Select from dropdown</span>
            ) : (
              value
            ),
        }}
      >
        {businessTypes.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledTextField>

      <StyledInputLabel htmlFor="description">
        Business Description
      </StyledInputLabel>
      <StyledTextField
        id="description"
        name="description"
        placeholder="Write description of your Business"
        variant="standard"
        fullWidth
        value={formData.description}
        onChange={handleChange}
        multiline
        rows={2}
      />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
      >
        <Alert
          severity={snackbar.severity}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
});

export default Form;
