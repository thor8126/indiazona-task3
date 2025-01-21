import React from "react";
import { TextField, MenuItem, Box, InputLabel } from "@mui/material";
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
  marginBottom: "-4px",
});

export default function Form() {
  const businessTypes = [
    "Retail",
    "Technology",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Other",
  ];

  return (
    <Box component="form" noValidate autoComplete="off">
      <StyledInputLabel htmlFor="name">Name</StyledInputLabel>
      <StyledTextField
        id="name"
        placeholder="Write your name here"
        variant="standard"
        fullWidth
      />

      <StyledInputLabel htmlFor="mobile">Mobile</StyledInputLabel>
      <StyledTextField
        id="mobile"
        placeholder="Write your mobile number here"
        variant="standard"
        fullWidth
      />

      <StyledInputLabel htmlFor="email">Email</StyledInputLabel>
      <StyledTextField
        id="email"
        placeholder="Write your Email ID here"
        type="email"
        variant="standard"
        fullWidth
      />

      <StyledInputLabel htmlFor="business-type">Business Type</StyledInputLabel>
      <StyledTextField
        id="business-type"
        select
        fullWidth
        defaultValue=""
        variant="standard"
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

      <StyledInputLabel htmlFor="business-description">
        Business Description
      </StyledInputLabel>
      <StyledTextField
        id="business-description"
        placeholder="Write description of your Business"
        variant="standard"
        fullWidth
      />
    </Box>
  );
}
