import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Analytics from "../components/Template/Analytics";
import Navigation from "../components/Template/Navigation";
import SideBar from "../components/Template/SideBar";
import Box from "@mui/material/Box";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Button from "@mui/material/Button";

const Main = (props) => (
  <HelmetProvider>
    <Analytics />
    <Helmet
      titleTemplate="%s | Wang Jinghao（王靖淏）"
      defaultTitle="Wang Jinghao（王靖淏）"
      defer={false}
    >
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">{props.children}</div>
      {props.fullPage ? null : <SideBar />}
      <Box sx={{ position: "fixed", bottom: 10, left: 10, right: 0 }}>
        <Button
          variant="extended"
          sx={{ mt: 0.5, backgroundColor: "white", textTransform: "none" }}
          disableElevation
        >
          <PriorityHighIcon sx={{ color: "#ffb39a", marginLeft: -1 }} />
          Latest update: 2024-12
        </Button>
      </Box>
    </div>
  </HelmetProvider>
);

export default Main;
