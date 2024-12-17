import React from "react";

import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import ContactIcons from "../Contact/contact-icons.tsx";

const NameTypography = styled(Typography)({
  fontSize: "30px",
  margin: "0em 0em 0em 0em",
  paddingBottom: "2em",
  marginTop: "1em",
  lineHeight: "150%",
  letterSpacing: "0.04em",
  fontFamily: "Söhne, sans-serif",
  color: "#080808",
  fontWeight: "bold",
});

const SideBarDiv = styled("div")({
  minWidth: "18em",
  width: "22em",
});

export default function SideBar(){
  return (
    <SideBarDiv>
      <NameTypography>
        Wang Jinghao <br /> 王靖淏
      </NameTypography>
      <ContactIcons />
    </SideBarDiv>
  );
}


