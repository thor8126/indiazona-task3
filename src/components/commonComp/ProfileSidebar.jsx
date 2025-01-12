import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import {
  Person,
  ShoppingBag,
  Favorite,
  LocationOn,
  Logout,
  DeleteOutline,
  Menu as MenuIcon,
} from "@mui/icons-material";

const iconMap = {
  Person: <Person />,
  ShoppingBag: <ShoppingBag />,
  Favorite: <Favorite />,
  LocationOn: <LocationOn />,
  Logout: <Logout />,
  DeleteOutline: <DeleteOutline />,
};
const ProfileSidebar = ({
  user,
  navItems,
  activeView,
  handleNavigation,
  setIsDeleteDialogOpen,
}) => {
  return (
    <Box
      sx={{
        width: 315,
        backgroundColor: "#eff8ff",
        height: "100%",
      }}
    >
      {/* Profile Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          justifyContent: "space-around",
          paddingTop: "16px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#455F76",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Hello 👋
          </Typography>
          <Typography
            sx={{ fontSize: "18px", fontWeight: "700", color: "#455F76" }}
          >
            {user.fullName.split(" ")[0]}
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

      {/* Navigation */}
      <List
        sx={{
          backgroundColor: "#eff8ff",
          borderRadius: 2,
        }}
      >
        {navItems.map((item) => (
          <ListItem
            button
            key={item.id}
            selected={activeView === item.id}
            onClick={() => handleNavigation(item)}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              py: "16px",
              bgcolor: activeView === item.id ? "#455F76" : "transparent",
              color: activeView === item.id ? "white" : "inherit",
              "&:hover": {
                bgcolor: activeView === item.id ? "#455F76" : "#e2e8f0",
              },
              "& .MuiListItemIcon-root": {
                color: activeView === item.id ? "white" : "#64748b",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
              }}
            >
              {iconMap[item.icon]}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                fontSize: "14px",
                fontWeight: activeView === item.id ? 500 : 400,
                color: item.color === "error" ? "#ef4444" : "inherit",
              }}
            />
          </ListItem>
        ))}

        <ListItem
          button
          key="logout"
          onClick={() =>
            handleNavigation({
              id: "logout",
              path: "/logout",
              icon: "Logout",
              label: "Logout",
            })
          }
          sx={{
            borderRadius: 1,
            mb: 0.5,
            py: "16px",
            "&.Mui-selected": {
              backgroundColor: "#455F76 !important",
              color: "white",
              "& .MuiListItemIcon-root": {
                color: "white",
              },
              "&:hover": {
                backgroundColor: "#455F76 !important",
              },
            },
            "&:hover": {
              bgcolor: "#e2e8f0",
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 40,
              color: "#64748b",
            }}
          >
            {iconMap["Logout"]}
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: 400,
            }}
          />
        </ListItem>

        <ListItem
          button
          key="delete"
          onClick={() => setIsDeleteDialogOpen(true)}
          sx={{
            borderRadius: 1,
            mb: 0.5,
            py: "16px",
            "&:hover": {
              bgcolor: "#e2e8f0",
            },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 40,
              color: "#64748b",
            }}
          >
            {iconMap["DeleteOutline"]}
          </ListItemIcon>
          <ListItemText
            primary="Delete Account"
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: 400,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default ProfileSidebar;
