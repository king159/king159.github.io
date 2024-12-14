import newsData from "../../data/about/news";
import aboutMeData from "../../data/about/bio";
import React from "react";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

const BioTypography = styled(Typography)({
  fontFamily: "Söhne, sans-serif",
  lineHeight: "200%",
  backgroundColor: "white",
  padding: "1em 1em 1em 1em",
  borderRadius: "10px",
  boxShadow: "0 0 2px #0000001a",
  "& a": {
    textDecoration: "none",
    borderBottom: "2px dotted #a0a0a0cc",
    color: "inherit",
    "&:hover": {
      borderBottomColor: "transparent",
      color: "#005E54",
      "$:before": {
        color: "blue",
      },
    },
  },
  "& del": {
    fontSize: "21px",
    opacity: "0.4",
  },
});

export default function AboutMeCell() {
  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" color="black">
        Biography
      </Typography>
      <Card>
        <BioTypography>{aboutMeData}</BioTypography>
      </Card>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" color="black">
        Updates
      </Typography>
      <Card>
        <List>
          {newsData.map((item) => (
            <ListItem sx={{ backgroundColor: "white" }}>
              <ListItemButton onClick={() => window.open(item.link)}>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.firstLine}
                  secondary={item.secondLine ? item.secondLine : null}
                  sx={{ color: "black" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );
}
