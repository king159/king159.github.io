import React from "react";
import { Box, Typography, Button, Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import ColorArray from "../data/color.tsx";

const ErrorTypography = styled(Typography)(() => ({
  fontSize: "50px",
  fontWeight: "700",
  color: "#080808",
  textAlign: "center",
  margin: "20px 0",
}));

const SubtitleTypography = styled(Typography)(() => ({
  fontSize: "20px",
  color: "#808080",
  textAlign: "center",
  marginBottom: "30px",
}));

const ErrorCard = styled(Card)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 20px #0000001a",
  backgroundColor: "white",
}));

const CustomButton = styled(Button)(() => ({
  backgroundColor: ColorArray[3],
  color: "white",
  textTransform: "none",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: ColorArray[4],
  },
}));

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
      }}
    >
      <ErrorCard>
        <ErrorTypography>404 - Page Not Found</ErrorTypography>
        <SubtitleTypography>
          Sorry, the page you're looking for doesn't exist.
        </SubtitleTypography>
        <CustomButton
          startIcon={<HomeIcon />}
          onClick={() => (window.location.href = "/")}
        >
          Go Back to Homepage
        </CustomButton>
      </ErrorCard>
    </Box>
  );
}
