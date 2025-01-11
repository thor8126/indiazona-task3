import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
const OtpInput = ({ value, onChange }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  React.useEffect(() => {
    if (!inputRefs.current[0]) {
      inputRefs.current = inputRefs.current.slice(0, 6);
    }
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Call parent's onChange with complete value
    onChange(newOtp.join(""));

    // Move to next input if current field is filled
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current field is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData
      .getData("text")
      .slice(0, 6)
      .split("")
      .filter((x) => !isNaN(x));

    if (pasteData.length > 0) {
      const newOtp = [...otp];
      pasteData.forEach((value, index) => {
        if (index < 6) newOtp[index] = value;
      });
      setOtp(newOtp);
      onChange(newOtp.join(""));

      // Focus the next empty input or the last input
      const nextEmptyIndex = newOtp.findIndex((x) => x === "");
      const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
      inputRefs.current[focusIndex].focus();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      {otp.map((digit, index) => (
        <TextField
          key={index}
          inputRef={(ref) => (inputRefs.current[index] = ref)}
          value={digit}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          variant="outlined"
          sx={{
            width: "48px",
            "& .MuiOutlinedInput-root": {
              "& input": {
                padding: "10px",
                textAlign: "center",
                fontSize: "20px",
              },
              "& fieldset": {
                borderColor: "#E5E7EB",
              },
              "&:hover fieldset": {
                borderColor: "#FB923C",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#FB923C",
              },
            },
          }}
          inputProps={{
            maxLength: 1,
            type: "text",
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
        />
      ))}
    </Box>
  );
};
const ChangePasswordModal = ({ open, onClose, userMobileNumber }) => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState("PASSWORD");
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    mobileNumber: userMobileNumber || "",
    otp: "",
  });
  const [otpTimer, setOtpTimer] = useState(30);
  const [canResendOtp, setCanResendOtp] = useState(false);

  React.useEffect(() => {
    let interval;
    if (currentStep === "OTP" && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => {
          if (prev <= 1) {
            setCanResendOtp(true);
            clearInterval(interval);
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentStep, otpTimer]);

  const handlePasswordChange = (field) => (event) => {
    setPasswordData({
      ...passwordData,
      [field]: event.target.value,
    });
  };

  const handleForgotPassword = () => {
    setCurrentStep("MOBILE");
  };

  const handleGetOTP = () => {
    // Add logic to send OTP
    setCurrentStep("OTP");
    setOtpTimer(30);
    setCanResendOtp(false);
  };

  const handleVerifyOTP = () => {
    setCurrentStep("NEW_PASSWORD");
  };

  const handleResendOTP = () => {
    setOtpTimer(30);
    setCanResendOtp(false);
    // Add logic to resend OTP
  };

  const handleSave = () => {
    // Handle password change logic here
    console.log("Password change data:", passwordData);
    onClose();
  };

  const handleClose = () => {
    setCurrentStep("PASSWORD");
    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      mobileNumber: userMobileNumber || "",
      otp: "",
    });
    onClose();
  };

  const passwordFieldProps = (
    showPassword,
    handleClickShowPassword,
    value,
    onChange,
    isNumberField = false
  ) => ({
    fullWidth: true,
    variant: "outlined",
    type: isNumberField ? "tel" : showPassword ? "text" : "password",
    sx: {
      fontSize: "24px",
      fontWeight: 600,
      backgroundColor: "#fff",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#E5E7EB",
        },
      },
    },
    InputProps:
      !isNumberField && showPassword !== undefined
        ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }
        : undefined,
    value: value,
    onChange: onChange,
  });

  const renderDialogContent = () => {
    switch (currentStep) {
      case "MOBILE":
        return (
          <>
            <DialogTitle
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#455F76",
                padding: "16px",
              }}
            >
              Forgot Password
            </DialogTitle>
            <DialogContent sx={{ width: "100%", minHeight: "250px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1 }}
              >
                <Box>
                  <Typography
                    sx={{ mb: 1, color: "#6B7280", fontSize: "14px" }}
                  >
                    Mobile Number
                  </Typography>
                  <TextField
                    {...passwordFieldProps(
                      undefined,
                      undefined,
                      passwordData.mobileNumber,
                      handlePasswordChange("mobileNumber"),
                      true
                    )}
                    placeholder="Enter your registered mobile number"
                  />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions
              sx={{
                padding: "24px",
                display: "flex",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleGetOTP}
                variant="contained"
                sx={{
                  width: "256px",
                  height: "56px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  bgcolor: "#fb923c",
                  "&:hover": {
                    bgcolor: "#f97316",
                  },
                }}
              >
                Get OTP
              </Button>
            </DialogActions>
          </>
        );

      case "OTP":
        return (
          <>
            <DialogTitle
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#455F76",
                padding: "16px",
              }}
            >
              Enter OTP
            </DialogTitle>
            <DialogContent sx={{ width: "100%", minHeight: "250px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1 }}
              >
                <Box>
                  <Typography
                    sx={{ mb: 1, color: "#6B7280", fontSize: "14px" }}
                  >
                    Enter 6-digit OTP
                  </Typography>
                  <OtpInput
                    value={passwordData.otp}
                    onChange={(value) => {
                      setPasswordData((prev) => ({
                        ...prev,
                        otp: value,
                      }));
                    }}
                  />
                  <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                  >
                    {canResendOtp ? (
                      <Button
                        onClick={handleResendOTP}
                        sx={{
                          color: "#FB923C",
                          textTransform: "none",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        Resend OTP
                      </Button>
                    ) : (
                      <Typography sx={{ color: "#6B7280", fontSize: "14px" }}>
                        Resend OTP in {otpTimer}s
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions
              sx={{
                padding: "24px",
                display: "flex",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleVerifyOTP}
                variant="contained"
                sx={{
                  width: "256px",
                  height: "56px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  bgcolor: "#fb923c",
                  "&:hover": {
                    bgcolor: "#f97316",
                  },
                }}
              >
                Verify & Proceed
              </Button>
            </DialogActions>
          </>
        );
      case "NEW_PASSWORD":
        return (
          <>
            <DialogTitle
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#455F76",
                padding: "16px",
              }}
            >
              Set New Password
            </DialogTitle>
            <DialogContent sx={{ width: "100%", minHeight: "250px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1 }}
              >
                <Box>
                  <Typography
                    sx={{ mb: 1, color: "#6B7280", fontSize: "14px" }}
                  >
                    New Password
                  </Typography>
                  <TextField
                    {...passwordFieldProps(
                      showNewPassword,
                      () => setShowNewPassword(!showNewPassword),
                      passwordData.newPassword,
                      handlePasswordChange("newPassword")
                    )}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{ mb: 1, color: "#6B7280", fontSize: "14px" }}
                  >
                    Confirm New Password
                  </Typography>
                  <TextField
                    {...passwordFieldProps(
                      showConfirmPassword,
                      () => setShowConfirmPassword(!showConfirmPassword),
                      passwordData.confirmPassword,
                      handlePasswordChange("confirmPassword")
                    )}
                  />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions
              sx={{
                padding: "24px",
                display: "flex",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleClose}
                variant="outlined"
                sx={{
                  width: "256px",
                  height: "56px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  borderColor: "#E5E7EB",
                  color: "#455F76",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                variant="contained"
                sx={{
                  width: "256px",
                  height: "56px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  bgcolor: "#fb923c",
                  "&:hover": {
                    bgcolor: "#f97316",
                  },
                }}
              >
                Save
              </Button>
            </DialogActions>
          </>
        );

      default:
        return (
          <>
            <DialogTitle
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#455F76",
                padding: "16px",
              }}
            >
              Set New Password
            </DialogTitle>
            <DialogContent sx={{ width: "100%", minHeight: "250px" }}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1 }}
              >
                <Box>
                  <Typography
                    sx={{ mb: 1, color: "#6B7280", fontSize: "14px" }}
                  >
                    Old Password
                  </Typography>
                  <TextField
                    {...passwordFieldProps(
                      showOldPassword,
                      () => setShowOldPassword(!showOldPassword),
                      passwordData.oldPassword,
                      handlePasswordChange("oldPassword")
                    )}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mt: 0.5,
                    }}
                  >
                    <Button
                      onClick={handleForgotPassword}
                      sx={{
                        color: "#FB923C",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      Forgot Password ?
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    sx={{ mb: 1, color: "#6B7280", fontSize: "14px" }}
                  >
                    New Password
                  </Typography>
                  <TextField
                    {...passwordFieldProps(
                      showNewPassword,
                      () => setShowNewPassword(!showNewPassword),
                      passwordData.newPassword,
                      handlePasswordChange("newPassword")
                    )}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{ mb: 1, color: "#6B7280", fontSize: "14px" }}
                  >
                    Confirm New Password
                  </Typography>
                  <TextField
                    {...passwordFieldProps(
                      showConfirmPassword,
                      () => setShowConfirmPassword(!showConfirmPassword),
                      passwordData.confirmPassword,
                      handlePasswordChange("confirmPassword")
                    )}
                  />
                </Box>
              </Box>
            </DialogContent>
            <DialogActions
              sx={{
                padding: "24px",
                display: "flex",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleClose}
                variant="outlined"
                sx={{
                  width: "256px",
                  height: "56px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  borderColor: "#E5E7EB",
                  color: "#455F76",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSave}
                variant="contained"
                sx={{
                  width: "256px",
                  height: "56px",
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  bgcolor: "#fb923c",
                  "&:hover": {
                    bgcolor: "#f97316",
                  },
                }}
              >
                Save
              </Button>
            </DialogActions>
          </>
        );
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "8px",
          padding: "16px",
        },
      }}
    >
      {renderDialogContent()}
    </Dialog>
  );
};

export default ChangePasswordModal;
