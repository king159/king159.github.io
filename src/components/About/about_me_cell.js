import newsData from "../../data/news";
import React from "react";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

const AboutMeTypography = styled(Typography)({
  fontFamily: "Söhne, sans-serif",
  lineHeight: "200%",
  backgroundColor: "white",
  padding: "2em 1em",
  borderRadius: "10px",
  boxShadow: "0 0 2px rgba(0, 0, 0, 0.1)",
});

const MyHyperLink = styled("a")({
  textDecoration: "none",
  borderBottom: "2px dotted rgba(160, 160, 160, 0.8)",
  color: "inherit",
  "&:hover": {
    borderBottomColor: "transparent",
    color: "#005E54",
    "$:before": {
      color: "blue",
    },
  },
});

const MyDelete = styled("del")({
  fontSize: "21px",
  opacity: "0.4",
});

const aboutMeData = (
  <div>
    <p style={{ paddingBottom: "2em" }}>
      He is a first year CSE Ph.D student at{" "}
      <MyHyperLink href="https://www.cuhk.edu.hk/">
        The Chinese University of Hong Kong
      </MyHyperLink>
      , supervised by{" "}
      <MyHyperLink href="https://www.cse.cuhk.edu.hk/~pheng/">
        Prof. Pheng-Ann Heng
      </MyHyperLink>
      . Before that, he spent 5 years in the{" "}
      <MyHyperLink href="https://www.ntu.edu.sg/">
        Nanyang Technological University
      </MyHyperLink>
      , Singapore, where he received his B.Eng. and M.Eng. degrees in Computer
      Science.
      <a> a link for testing</a>
    </p>
    <p style={{ paddingBottom: "2em" }}>
      His research interests include multimodal large language model and image
      generation.
    </p>
    <p>
      Notice that <MyDelete>C190209@e.ntu.edu.sg</MyDelete> and{" "}
      <MyDelete>jinghao003@e.ntu.edu.sg</MyDelete> are no longer in use.
    </p>
  </div>
);

export default function AboutMeCell() {
  return (
    <div>
      <div>
        <ul>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" color="black">
            Biography
          </Typography>
        </ul>
        <Card color="black">
          <AboutMeTypography>{aboutMeData}</AboutMeTypography>
        </Card>
      </div>
      <div>
        <ul>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ mt: 4, mb: 2 }}
              variant="h6"
              component="div"
              color="black"
            >
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
          </Grid>
        </ul>
      </div>
    </div>
  );
}
