import React from "react";
import Main from "../layouts/Main";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const PublicationTypography = styled(Typography)({
  fontSize: "28px",
  margin: "0.5em 1.2em 1em 0em",
  lineHeight: "160%",
  fontWeight: "400",
  letterSpacing: "-0.02em",
  fontFamily: "Söhne, sans-serif",
  color: "#080808",
});

export default function Publication() {
  return (
    <Main title="Posts">
      <Typography sx={{ mt: 4, mb: 2, color: "black" }} variant="h4">
        Posts
      </Typography>
      <PublicationTypography
        variant="body2"
        sx={{ color: "text.secondary", fontSize: "16px" }}
      >
        Sharing my posts on philosophy of mind, cognitive science, and
        artificial intelligence.
      </PublicationTypography>
    </Main>
  );
}
