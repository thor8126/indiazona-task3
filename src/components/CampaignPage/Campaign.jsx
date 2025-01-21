import React from "react";
import { Container } from "@mui/material";

import AboutCampaign from "./AboutCampaign";
import BenefitSection from "./BenefitSection";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import Header from "./Header";

const Campaign = () => {
  return (
    <>
      <Header />
      <Container
        maxWidth
        sx={{
          py: 7,
          px: { xs: 2, sm: 4, md: 6.5 },
        }}
      >
        <br />
        <br />
        {/*  AboutCampaign Component */}
        <AboutCampaign />

        <br />
        {/* BenefitSection Component */}
        <BenefitSection />

        <br />
        {/* HowItWorks Component */}
        <HowItWorks />

        <br />
        <br />
        {/* FAQ Component */}
        <FAQ />
      </Container>
    </>
  );
};

export default Campaign;
