import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import StarRateIcon from "@mui/icons-material/StarRate";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";

async function showGithubStars(github) {
  const url = github.split("/").slice(-2).join("/");
  let githubRepoData = await fetch(
    `https://img.shields.io/github/stars/${url}`,
  );
  // parse the svg file
  let githubRepoDataText = await githubRepoData.text();
  // find the number of stars
  let githubStars = githubRepoDataText
    .split("</text></a></g></svg>")[0]
    .split(">")[31];
  return githubStars;
}

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function PublicationCell({ data }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [githubStars, setGithubStars] = useState("0");
  const handleExpandClick = () => {
    setShowAbstract(!showAbstract);
  };
  useEffect(() => {
    if (data.link.github) {
      showGithubStars(data.link.github).then((value) => setGithubStars(value));
    }
  }, [data.link.github]);

  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            sx={{
              fontSize: "28px",
              margin: "0.5em 1.5em 0.5em 0em",
              textAlign: "center",
              lineHeight: "160%",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              fontFamily: "Söhne, sans-serif",
              color: "#080808",
            }}
          >
            {data.title}
          </Typography>
          {/* Render authors */}
          <Typography
            sx={{
              fontSize: "18px",
              margin: "0.5em 1.5em 0.5em 0em",
              textAlign: "left",
              lineHeight: "150%",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              fontFamily: "Söhne, sans-serif",
              color: "#080808",
            }}
          >
            {data.author.split(",").map((item, index) => {
              const trimmedItem = item.trim();
              const isHighlighted =
                trimmedItem === "Jinghao Wang" ||
                trimmedItem === "Jinghao Wang*";
              const convertedItem = trimmedItem.includes("#");
              return (
                <span key={index}>
                  {isHighlighted ? (
                    <b>{trimmedItem}</b>
                  ) : convertedItem ? (
                    <>
                      {trimmedItem.replace("#", "")}
                      <sup>&#x2709;</sup>
                    </>
                  ) : (
                    trimmedItem
                  )}
                  {data.author.split(",").length === index + 1
                    ? ""
                    : ",\u00A0\u00A0"}
                </span>
              );
            })}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              margin: "0.5em 1.5em 0.5em 0em",
              textAlign: "left",
              lineHeight: "150%",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              fontFamily: "Söhne, sans-serif",
              color: "#080808",
            }}
          >
            {data.conference}
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              margin: "0.5em 1.5em 0.5em 0em",
              textAlign: "left",
              lineHeight: "150%",
              fontWeight: "400",
              letterSpacing: "-0.02em",
              fontFamily: "Söhne, sans-serif",
              color: "#080808",
            }}
          >
            {data.time}
          </Typography>
          {/* Render paper and GitHub buttons */}
          <Box sx={{ "& button": { marginRight: "1em" } }}>
            <Button
              size="small"
              endIcon={<SendIcon />}
              onClick={() => window.open(data.link.paper)}
            >
              {"paper"}
            </Button>

            {data.link.github && (
              <Button
                size="small"
                endIcon={<GitHubIcon />}
                onClick={() => window.open(data.link.github)}
              >
                {"github"}
              </Button>
            )}
            {data.link.github && (
              <Badge badgeContent={`${githubStars}`} sx={{ color: "black" }}>
                <StarRateIcon sx={{ color: "black" }} />
              </Badge>
            )}
            {/* Render abstract toggle */}
            <ExpandMore
              expand={showAbstract}
              onClick={handleExpandClick}
              aria-expanded={showAbstract}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
            <Collapse in={showAbstract} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: "18px",
                    margin: "0.5em 1.5em 0.5em 0em",
                    textAlign: "left",
                    lineHeight: "150%",
                    fontWeight: "400",
                    letterSpacing: "-0.02em",
                    fontFamily: "Söhne, sans-serif",
                    color: "#080808",
                  }}
                >
                  {data.abstract}
                </Typography>
              </CardContent>
            </Collapse>
          </Box>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/public/OIP-C.jpg"
        alt="Paella dish"
      />
    </Card>
  );
}
