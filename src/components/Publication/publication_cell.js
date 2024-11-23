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

async function showGithubStars(githubLink) {
  const url = githubLink.split("/").slice(-2).join("/");
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

const PublicationTypography = styled(Typography)({
  fontSize: "28px",
  margin: "0.5em 1.2em 1em 0em",
  lineHeight: "160%",
  fontWeight: "400",
  letterSpacing: "-0.02em",
  fontFamily: "Söhne, sans-serif",
  color: "#080808",
});

const StrongAuthor = styled("strong")({
  color: "#1a1a1a",
  fontSize: "20px",
});

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
    <Card sx={{ display: "flex", marginBottom: "2em" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          <PublicationTypography sx={{ textAlign: "left" }}>
            {data.title}
          </PublicationTypography>

          <PublicationTypography
            sx={{ fontSize: "18px" }}
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
                    <StrongAuthor>{trimmedItem}</StrongAuthor>
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
          </PublicationTypography>
          <PublicationTypography
            sx={{
              fontSize: "18px",
              fontStyle: "italic",
            }}
          >
            {data.conference}
          </PublicationTypography>
          <PublicationTypography
            sx={{
              fontSize: "18px",
            }}
          >
            {data.time}
          </PublicationTypography>
          <PublicationTypography variant="body2" sx={{ color: 'text.secondary', fontSize: "16px" }}>
            TL;DR: {data.tldr}
          </PublicationTypography>
          <Box sx={{ "& button": { marginRight: "1em" } }}>
            {/* Render paper and GitHub buttons */}
            <Button
              size="small"
              endIcon={<SendIcon />}
              onClick={() => window.open(data.link.paper)}
              sx={{ color: "Teal" }}
            >
              {"paper"}
            </Button>
            {data.link.github && (
              <Button
                size="small"
                endIcon={<GitHubIcon />}
                onClick={() => window.open(data.link.github)}
                sx={{ color: "black" }}
              >
                {"Code"}
              </Button>
            )}
            {data.link.github && (
              <Badge badgeContent={`${githubStars}`} sx={{ color: "black" }}>
                <StarRateIcon sx={{ color: "Gold" }} />
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
                <PublicationTypography sx={{ fontSize: "16px" }}>
                  {data.abstract}
                </PublicationTypography>
              </CardContent>
            </Collapse>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
