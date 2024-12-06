import newsData from "../../data/news";
import aboutMeData from "../../data/about_me";
import * as React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function AboutMeCell() {
  return (
    <div>
      <div>
        <ul>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
            About
          </Typography>
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
            color="black"
          >
            Biography
          </Typography>
        </ul>
        <Typography color="black">{aboutMeData}</Typography>
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
            <Demo>
              <List>
                {newsData.map((item) => (
                  <ListItem>
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
            </Demo>
          </Grid>
        </ul>
      </div>
    </div>
  );
}
