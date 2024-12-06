import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import StarRateIcon from "@mui/icons-material/StarRate";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";

const { PUBLIC_URL } = process.env;

async function showGithubStars(githubLink) {
  const url = githubLink.split("/").slice(-2).join("/");
  try {
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
  } catch {
    return "0";
  }
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
  margin: "0.5em 0em 1em 0em",
  lineHeight: "160%",
  fontWeight: "400",
  letterSpacing: "-0.02em",
  fontFamily: "Söhne, sans-serif",
  color: "#080808",
});

const MeAsAuthor = styled("strong")({
  color: "#1a1a1a",
  fontSize: "21px",
});

const HighlightAuthor = (item, index, arr) => {
  const trimmedItem = item.trim();
  const isHighlighted =
    trimmedItem === "Jinghao Wang" || trimmedItem === "Jinghao Wang*";
  const convertedItem = trimmedItem.includes("#");
  return (
    <span key={index}>
      {isHighlighted ? (
        <MeAsAuthor>{trimmedItem}</MeAsAuthor>
      ) : convertedItem ? (
        <>
          {trimmedItem.replace("#", "")}
          <sup>&#x2709;</sup>
        </>
      ) : (
        trimmedItem
      )}
      {arr.length === index + 1 ? "" : "," + "\u00A0".repeat(2)}
    </span>
  );
};

const MyCardMedia = styled(CardMedia)(() => ({
  flexShrink: 0,
  width: "40%",
  marginLeft: "auto",
  marginRight: "auto",
  height: "auto",
}));

export default function PublicationCell({ data, expandAllAbstract }) {
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

  useEffect(() => {
    if (expandAllAbstract) {
      setShowAbstract(true);
    } else {
      setShowAbstract(false);
    }
  }, [expandAllAbstract]);

  return (
    <Card sx={{ display: "flex", marginBottom: "1.5em" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent>
          {/* Render title */}
          <PublicationTypography sx={{ textAlign: "center", fontSize: "26px", }}>
            {data.title}
          </PublicationTypography>

          {/* Render authors */}
          <PublicationTypography sx={{ fontSize: "18px" }}>
            {data.author.split(",").map(HighlightAuthor)}
          </PublicationTypography>

          {/* Render conference */}
          <PublicationTypography
            sx={{
              fontSize: "18px",
              fontStyle: "italic",
            }}
          >
            {data.conference}
          </PublicationTypography>

          {/* Render TL;DR */}
          <PublicationTypography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "18px" }}
          >
            TL;DR: {data.tldr}
          </PublicationTypography>
          {/* Render time */}
          <PublicationTypography
            sx={{
              fontSize: "16px",
            }}
          >
            {data.time}
          </PublicationTypography>

          {/* Render buttons */}
          <Box sx={{ "& button": { marginRight: "1em" } }}>
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
              sx={{ color: "black", marginLeft: "0.5em" }}
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
      <MyCardMedia image={`${PUBLIC_URL}/painting/${data.image_path}`} />
    </Card>
  );
}
