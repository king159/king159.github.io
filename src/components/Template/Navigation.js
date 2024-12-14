import * as React from "react";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

import routes from "../../data/routes";

const HeaderDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "white",
  borderBottom: "1px solid rgba(160, 160, 160, 0.3)",
  left: 0,
  top: 0,
  zIndex: 100,
  width: "100%",
  position: "fixed",
  lineHeight: "3.5em",
  height: "3.5em",
});

export default function Navigation() {
  return (
    <HeaderDiv>
      <Grid container sx={{ marginLeft: "3em" }}>
        {routes.map((label) => (
          <Link to={label.path}>
            <Button sx={{ color: "black", marginRight: "2em" }}>
              {label.label}
            </Button>
          </Link>
        ))}
      </Grid>
    </HeaderDiv>
  );
}
