"use client";
import React from "react";
import SignIn from "../../../modules/auth/Signin";
import { Box, styled } from "@mui/material";

const StyledSiginPage = styled(Box)(({ theme }) => ({
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
 // backgroundColor:theme.palette.primary.main,
  alignItems: "center",
  justifyContent: "center",
  "& .__wrapper": {
    width: 500,
  },
}));

const Page = () => {
  return (
    <StyledSiginPage>
      <Box component="div" className="__wrapper">
        <SignIn />
      </Box>
    </StyledSiginPage>
  );
};

export default Page;
