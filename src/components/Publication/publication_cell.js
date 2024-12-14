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
import CardMedia from "@mui/material/CardMedia";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

const { PUBLIC_URL } = process.env;

const ColorArray = ["#003547", "#005E54", "#C2BB00", "#F24405", "#ED8B16"];

async function retrieveGithubStars(githubLink) {
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

const PublicationTypography = styled(Typography)({
  fontSize: "28px",
  margin: "0.5em 0em 0.25em 0em",
  lineHeight: "160%",
  fontWeight: "400",
  letterSpacing: "-0.02em",
  fontFamily: "Söhne, sans-serif",
  color: "#080808",
});

const BibTeXTypography = styled(Typography)({
  fontFamily: "Arial, sans-serif",
  margin: "20px",
  padding: "15px",
  borderRadius: "5px",
  whiteSpace: "pre-wrap",
});

const MeAsAuthorStrong = styled("strong")({
  color: "#1a1a1a",
  fontSize: "21px",
  fontWeight: "700",
});

// image format
const MyCardMedia = styled(CardMedia)(() => ({
  flexShrink: 0,
  width: "40%",
  marginLeft: "auto",
  marginRight: "auto",
  height: "auto",
}));

const MySup = styled("sup")({
  fontSize: "0.8em",
  position: "relative",
  top: "-0.2em",
});

function HighlightAuthor(item, index, arr) {
  const trimmedItem = item.trim();
  const isHighlighted =
    trimmedItem === "Jinghao Wang" || trimmedItem === "Jinghao Wang*";
  const convertedItem = trimmedItem.includes("#");
  return (
    <span key={index}>
      {isHighlighted ? (
        <MeAsAuthorStrong>{trimmedItem}</MeAsAuthorStrong>
      ) : convertedItem ? (
        <>
          {trimmedItem.replace("#", "")}
          <MySup>&#x2709;</MySup>
        </>
      ) : (
        trimmedItem
      )}
      {arr.length === index + 1 ? "" : "," + "\u00A0".repeat(2)}
    </span>
  );
}

export default function PublicationCell({ data, expandAllAbstract }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showGithubStars, setGithubStars] = useState("0");
  const [showBibTeX, setShowBibTeX] = useState(false);
  const handleExpandClick = () => {
    setShowAbstract(!showAbstract);
  };

  const handleBibTeXClick = () => {
    setShowBibTeX(!showBibTeX);
  };

  useEffect(() => {
    if (data.link.github) {
      retrieveGithubStars(data.link.github).then((value) =>
        setGithubStars(value),
      );
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
          <PublicationTypography
            sx={{
              textAlign: "center",
              fontSize: "26px",
              paddingLeft: "1em",
              paddingRight: "1em",
              marginBottom: "1em",
            }}
          >
            {data.title}
          </PublicationTypography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginLeft: "2em" }}
          >
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
              sx={{
                color: "text.secondary",
                fontSize: "18px",
              }}
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

            <Box sx={{ "& button": { marginRight: "1em", padding: "0" } }}>
              {/* Render paper */}
              {data.bibtex && (
                <Button
                  size="small"
                  endIcon={<SendIcon />}
                  onClick={() => window.open(data.link.paper)}
                  sx={{ color: ColorArray[0], textTransform: "none" }}
                >
                  {"Paper"}
                </Button>
              )}
              {/* Render github link */}
              {data.link.github && (
                <Button
                  size="small"
                  endIcon={<GitHubIcon />}
                  onClick={() => window.open(data.link.github)}
                  sx={{ color: ColorArray[1], textTransform: "none" }}
                >
                  {"Code"}
                </Button>
              )}
              {/* render github star */}
              {data.link.github && (
                <Badge
                  badgeContent={`${showGithubStars}`}
                  sx={{ color: "black", marginRight: "1em" }}
                >
                  <StarRateIcon sx={{ color: ColorArray[2] }} />
                </Badge>
              )}
              {/* Render BibTeX */}
              {data.bibtex && (
                <Button
                  size="small"
                  endIcon={<FormatListBulletedIcon />}
                  onClick={handleBibTeXClick}
                  sx={{ color: ColorArray[3], textTransform: "none" }}
                >
                  {"BibTeX"}
                </Button>
              )}
              <Dialog open={showBibTeX} onClose={handleBibTeXClick}>
                <BibTeXTypography>{data.bibtex}</BibTeXTypography>
                <DialogActions>
                  <Button
                    autoFocus
                    onClick={handleBibTeXClick}
                    sx={{ color: "black" }}
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
              {/* Render abstract */}
              <Button
                expand={showAbstract}
                onClick={handleExpandClick}
                sx={{ color: ColorArray[4], textTransform: "none" }}
                endIcon={<ExpandMoreIcon />}
              >
                {"Abstract"}
              </Button>
              <Collapse in={showAbstract} timeout="auto" unmountOnExit>
                <CardContent>
                  <PublicationTypography sx={{ fontSize: "16px" }}>
                    {data.abstract}
                  </PublicationTypography>
                </CardContent>
              </Collapse>
            </Box>
          </Box>
        </CardContent>
      </Box>
      <MyCardMedia image={`${PUBLIC_URL}/painting/${data.image_path}`} />
    </Card>
  );
}
