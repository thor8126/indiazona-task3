import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ChangePasswordModal from "./ChangePasswordModal";

const commonTextFieldSx = {
  "& .MuiOutlinedInput-root": {
    bgcolor: "#EEF5FA",
  },
  "& .Mui-disabled": {
    WebkitTextFillColor: "#000000 !important",
    color: "#000000 !important",
  },
  "& .MuiInputBase-input": {
    fontSize: { xs: "16px", md: "20px" },
    fontWeight: 400,
    lineHeight: "24px",
    paddingY: { xs: "16px", md: "22px" },
    paddingX: { xs: "16px", md: "18px" },
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#000000",
    color: "#000000",
    fontSize: { xs: "16px", md: "20px" },
    fontWeight: 400,
    lineHeight: "24px",
  },
};

const EditProfileModal = ({ open, onClose, user, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: user.fullName || "",
    mobileNumber: user.mobileNumber || "",
    email: user.email || "",
    birthDate: user.birthDate || "",
  });

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "8px",
          padding: "16px",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontSize: "20px",
          fontWeight: 600,
          color: "#455F76",
          padding: "16px",
        }}
      >
        Edit Profile
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 1 }}>
          {/* First Row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 3, sm: 2 },
            }}
          >
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#EEF5FA",
                },
              }}
            />
            <TextField
              fullWidth
              label="Mobile Number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#EEF5FA",
                },
              }}
            />
          </Box>

          {/* Second Row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 3, sm: 2 },
            }}
          >
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#EEF5FA",
                },
              }}
            />
            <TextField
              fullWidth
              label="Birth Date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#EEF5FA",
                },
              }}
            />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          padding: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            width: { xs: "146px", md: "238px" },
            height: { xs: "47px", md: "56px" },
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            borderColor: "#E5E7EB",
            color: "#455F76",
            "&:hover": {
              borderColor: "#D1D5DB",
              bgcolor: "transparent",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{
            width: { xs: "146px", md: "238px" },
            height: { xs: "47px", md: "56px" },
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
    </Dialog>
  );
};

const PersonalInfoView = ({ user }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  const handleSave = (formData) => {
    // Handle saving the updated profile data
    console.log("Saving profile data:", formData);
    // You would typically make an API call here
  };
  const EditProfileButton = () => (
    <Button
      variant="contained"
      onClick={() => setIsEditModalOpen(true)}
      sx={{
        width: { md: "170px", sx: "214px" },
        height: { md: "56px", sx: "48px" },
        bgcolor: "#fb923c",
        "&:hover": {
          bgcolor: "#f97316",
        },
        textTransform: "none",
        fontSize: { xs: "16px", md: "20px" },
        fontWeight: "500",
      }}
    >
      Edit Profile{" "}
      <svg
        style={{ marginLeft: "3px" }}
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.3132 6.10289L20.3294 8.08382C20.1272 8.28579 19.8 8.28579 19.5978 8.08382L14.8213 3.3141C14.619 3.11215 14.619 2.78557 14.8213 2.5836L16.8051 0.602662C17.6097 -0.200887 18.918 -0.200887 19.7269 0.602662L22.3132 3.18519C23.1222 3.98874 23.1222 5.29505 22.3132 6.10289ZM13.1172 4.28523L1.81702 15.5693L0.904743 20.7902C0.77995 21.4949 1.39531 22.1052 2.10103 21.9847L7.32942 21.0695L18.6297 9.78546C18.8319 9.58351 18.8319 9.25692 18.6297 9.05496L13.8531 4.28523C13.6465 4.08328 13.3195 4.08328 13.1172 4.28523ZM6.2278 14.6025C5.99113 14.3661 5.99113 13.988 6.2278 13.7516L12.8547 7.13418C13.0914 6.89784 13.4701 6.89784 13.7068 7.13418C13.9434 7.37052 13.9434 7.74866 13.7068 7.98499L7.07984 14.6025C6.84316 14.8388 6.46449 14.8388 6.2278 14.6025ZM4.67435 18.2163H6.73989V19.7761L3.96432 20.2616L2.62602 18.9253L3.11229 16.1536H4.67435V18.2163Z"
          fill="white"
        />
      </svg>
    </Button>
  );

  const PasswordField = () => (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Typography sx={{ fontSize: "16px", fontWeight: 400, color: "#5D5D5D" }}>
        Password
      </Typography>
      <TextField
        type="password"
        defaultValue={user.password}
        fullWidth
        variant="outlined"
        disabled
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "#EEF5FA",
            paddingY: { md: "6px" },
          },
          "& .Mui-disabled": {
            WebkitTextFillColor: "#000000",
          },
          "& .MuiInputBase-input.Mui-disabled": {
            color: "#000000",
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: 500,
            lineHeight: "24px",
          },
        }}
        InputProps={{
          endAdornment: (
            <Button
              onClick={() => setIsChangePasswordOpen(true)}
              disableElevation
              sx={{
                width: { md: "100%" },
                color: "#FF944E !important",
                textTransform: "none",
                fontSize: { xs: "14px", md: "16px" },
                "&.Mui-disabled": {
                  color: "#FF944E !important",
                },
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#FF944E !important",
                },
              }}
            >
              {isMobile ? "Change" : "Change Password"}
            </Button>
          ),
        }}
      />
    </Box>
  );

  const BirthDateField = () => (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Typography sx={{ fontSize: "16px", fontWeight: 400, color: "#5D5D5D" }}>
        Birth Date
      </Typography>
      <TextField
        defaultValue={user.birthDate}
        fullWidth
        variant="outlined"
        disabled
        sx={commonTextFieldSx}
      />
    </Box>
  );
  const Header = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "14px",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#455F76",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          My Profile
        </Typography>
      </Box>

      <Avatar
        src={user.avatar}
        sx={{
          width: 57,
          height: 57,
          bgcolor: "#f0f0f0",
          border: "2px solid white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {user.avatar}
      </Avatar>
    </Box>
  );
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Typography></Typography>
        {isMobile && <Header />}
        {!isMobile && <EditProfileButton />}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box>
          <Typography
            sx={{ fontSize: "16px", fontWeight: 400, color: "#5D5D5D" }}
          >
            Full name
          </Typography>
          <TextField
            defaultValue={user.fullName}
            fullWidth
            variant="outlined"
            disabled
            sx={commonTextFieldSx}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Box sx={{ flex: 1, width: "100%" }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 400, color: "#5D5D5D" }}
            >
              Mobile No.
            </Typography>
            <TextField
              defaultValue={user.mobileNumber}
              fullWidth
              variant="outlined"
              disabled
              sx={commonTextFieldSx}
            />
          </Box>
          <Box sx={{ flex: 1, width: "100%" }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 400, color: "#5D5D5D" }}
            >
              Email Id
            </Typography>
            <TextField
              defaultValue={user.email}
              fullWidth
              variant="outlined"
              disabled
              sx={commonTextFieldSx}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          {isMobile ? (
            <>
              <PasswordField />
              <BirthDateField />
            </>
          ) : (
            <>
              <BirthDateField />
              <PasswordField />
            </>
          )}
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", md: "center" },
              gap: 1,
            }}
          >
            <Switch
              defaultChecked={user.notifications}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#fb923c",
                  "&:hover": {
                    bgcolor: "rgba(251, 146, 60, 0.08)",
                  },
                },
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  bgcolor: "#fb923c",
                },
              }}
            />
            <Box sx={{ width: { xs: "100%", md: "482px" } }}>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: 500,
                  color: "black",
                }}
              >
                Notification Preferences
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", md: "12px" },
                  color: "#455F76",
                  mt: 0.5,
                }}
              >
                Stay updated with our latest app news and exclusive offers! You
                can adjust your preferences anytime.
              </Typography>
            </Box>
          </Box>
        </Box>

        {isMobile && (
          <Box
            sx={{
              display: "flex",
              mt: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EditProfileButton />
          </Box>
        )}
      </Box>
      <EditProfileModal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        user={user}
        onSave={handleSave}
      />
      <ChangePasswordModal
        open={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
        userMobileNumber="+91 7500547650"
      />
    </Box>
  );
};

export default PersonalInfoView;
