import Typography from "@mui/material/Typography";
import Main from "../layouts/main.tsx";

import AboutMeCell from "../components/About/about-me-cell.tsx";

const About = () => (
  <Main title="About">
    <Typography sx={{ mt: 4, mb: 2, color: "black" }} variant="h4">
      About
    </Typography>
    <AboutMeCell />
  </Main>
);

export default About;
