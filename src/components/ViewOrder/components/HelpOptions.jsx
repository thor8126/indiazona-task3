import React from "react";
import { Box, Button, List, ListItem, Paper } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

const HelpOptions = ({
  isDelivered,
  onReturnOrder,
  onFeedback,
  onChat,
  onNotHappy,
  isCancelled,
  setIsCancelledModalOpen,
}) => {
  const buttonStyle = {
    justifyContent: "flex-start",
    textTransform: "none",
    color: "#455F76",
    fontSize: { xs: "14px", sm: "16px" },
    fontWeight: "regular",
    p: 0,
    minHeight: 40,
    width: "100%",
  };

  const arrowStyle = {
    marginLeft: "3px",
    fontSize: 16,
  };

  return (
    <Paper elevation={0}>
      <List sx={{ p: 0 }}>
        <>
          <ListItem disablePadding>
            <Button onClick={onChat} sx={buttonStyle}>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_706)">
                  <path
                    d="M6.73002 0.716187C3.37433 0.716187 0.576172 3.02388 0.576172 5.94696C0.576172 7.44234 1.39463 8.74573 2.5571 9.69711C2.48143 10.2025 2.27597 10.6795 1.96079 11.0817C1.83211 11.2468 1.69745 11.4071 1.55709 11.5623C1.4845 11.6388 1.41995 11.7225 1.36448 11.8122C1.3294 11.8694 1.27463 11.9334 1.2494 12.0626C1.22417 12.1919 1.25863 12.403 1.36448 12.5623L1.4414 12.6971L1.59525 12.774C2.13371 13.043 2.71525 12.9956 3.2494 12.851C3.78294 12.7057 4.29617 12.4571 4.78786 12.1968C5.27956 11.9365 5.74602 11.6651 6.11463 11.4663C6.16633 11.4386 6.19956 11.4319 6.2494 11.4085C7.21986 12.7426 8.9971 13.6393 10.9799 13.6393C10.9989 13.6417 11.0168 13.6393 11.0377 13.6393C11.8377 13.6393 14.4223 16.2817 15.9608 15.2356C16.0223 14.99 14.6082 14.374 14.5374 12.5433C15.7417 11.6922 16.5189 10.4263 16.5189 9.02388C16.5189 6.9488 14.8722 5.23434 12.6728 4.62019C11.9768 2.35557 9.5571 0.716187 6.73002 0.716187ZM6.73002 1.94696C9.52817 1.94696 11.6531 3.82388 11.6531 5.94696C11.6531 8.07003 9.52817 9.94696 6.73002 9.94696C6.23033 9.94696 5.94356 10.1513 5.5374 10.3703C5.13125 10.5894 4.6654 10.8602 4.21063 11.1008C3.81679 11.3088 3.4414 11.4688 3.09556 11.5814C3.43217 11.0953 3.78356 10.4559 3.84509 9.56234L3.86479 9.21588L3.57617 9.0048C2.47956 8.23619 1.80694 7.13034 1.80694 5.94696C1.80694 3.82388 3.93186 1.94696 6.73002 1.94696Z"
                    fill="#667085"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_706">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0.576172 0.716187)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <Box sx={{ ml: 1 }}>Chat with us</Box>
              <CallMadeIcon sx={arrowStyle} />
            </Button>
          </ListItem>
        </>
      </List>
    </Paper>
  );
};

export default HelpOptions;
