import { newsData, aboutMeData } from "../../data/about_me";
import * as React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
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
          {" "}
          <Typography
            sx={{ mt: 4, mb: 2 }}
            variant="h6"
            component="div"
            color="black"
          >
            About Me
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
              News
            </Typography>
            <Demo>
              <List>
                {newsData.map((item) => (
                  <ListItem>
                    <ListItemIcon>
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.firstLine}
                      secondary={item.secondLine ? item.secondLine : null}
                    />
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
