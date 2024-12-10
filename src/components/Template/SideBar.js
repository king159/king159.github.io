import React from "react";

import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import ContactIcons from "../Contact/contact_icons";

const NameTypography = styled(Typography)({
  fontSize: "30px",
  margin: "0.0em 0em 0em 0em",
  lineHeight: "150%",
  letterSpacing: "0.04em",
  fontFamily: "Söhne, sans-serif",
  color: "#080808",
  fontWeight: "bold",
});

const SideBar = () => (
  <section id="sidebar">
    <NameTypography>
      Wang Jinghao <br /> 王靖淏
    </NameTypography>
    <ContactIcons />
  </section>
);

export default SideBar;
