import * as React from "react";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import routes from "../../data/routes";

export default function Navigation() {
  return (
    <header id="header">
      <Grid container sx={{ marginLeft: "3em" }}>
        {routes.map((label) => (
          <Link to={label.path}>
            <Button sx={{ color: "black", marginRight: "2em" }}>
              {label.label}
            </Button>
          </Link>
        ))}
      </Grid>
    </header>
  );
}
