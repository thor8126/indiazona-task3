import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import icon1 from "../../assets/campaignicon1.png";
import icon2 from "../../assets/campaignicon2.png";
import icon3 from "../../assets/campaignicon3.png";
import icon4 from "../../assets/campaignicon4.png";

const AboutCampaign = () => {
  const campaigns = [
    {
      icon: icon1,
      title: "Empowering women to start their business & build their legacy",
    },
    {
      icon: icon2,
      title:
        "Share the right knowledge, resources and guidance for them to succeed",
    },
    {
      icon: icon4,
      title: "Real-time support for government compliances including GST",
    },
    {
      icon: icon3,
      title:
        "Guidance on Indiazona operations, including pricing and packaging",
    },
  ];

  return (
    <Box sx={{ paddingY: 2 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ mb: 6, fontWeight: 600, fontSize: "28px" }}
      >
        About the <span style={{ color: "#455F76" }}>Campaign</span>
      </Typography>

      <Grid container spacing={4}>
        {campaigns.map((campaign, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
                minHeight: { xs: "100px", sm: "120px", md: "auto" },
              }}
            >
              <CardContent
                sx={{
                  p: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    width={62}
                    height={62}
                    src={campaign.icon}
                    alt={campaign.title}
                    style={{
                      objectFit: "contain",
                      width: { xs: "48px", sm: "55px", md: 62 },
                      height: { xs: "48px", sm: "55px", md: 62 },
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#212121",
                    fontSize: { xs: "14px", sm: "15px", md: "16px" },
                    fontWeight: 500,
                    overflow: { xs: "hidden", sm: "hidden", md: "visible" },
                    display: {
                      xs: "-webkit-box",
                      sm: "-webkit-box",
                      md: "flex",
                    },
                    WebkitLineClamp: { xs: 3, sm: 4, md: "none" },
                    WebkitBoxOrient: {
                      xs: "vertical",
                      sm: "vertical",
                      md: "horizontal",
                    },
                  }}
                >
                  {campaign.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutCampaign;
