import React from "react";
import Typography from "@mui/material/Typography";
import Main from "../layouts/Main";

import AboutMeCell from "../components/About/about_me_cell";

const About = () => (
  <Main title="About">
    <Typography sx={{ mt: 4, mb: 2, color: "black" }} variant="h4">
      About
    </Typography>
    <AboutMeCell />
  </Main>
);

export default About;
