import React from "react";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { pink } from '@mui/material/colors';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

import Main from "../layouts/Main";
import PublicationCell from "../components/Publication/publication_cell";
import data from "../data/publication_data";
import PublicationFilter from "../components/Publication/publication_filter";


function checkFirstAuthor(author) {
  return (
    author.startsWith("Jinghao Wang") || author.startsWith("Jinghao Wang*")
  );
}

function checkPublished(conference) {
  return !(conference == "arXiv" || conference.includes("under review"));
}

function checkCurrentYear(time) {
  return time.split("-")[0] === new Date().getFullYear().toString();
}

function checkJournal(conference) {
  return conference.includes("TPAMI");
}

function checkConference(conference) {
  return !conference.includes("TPAMI");
}

function filter(
  publication,
  showFirstAuthor,
  showPublished,
  showCurrentYear,
  showJournal,
  showConference,
  showAll,
) {
  return (
    ((showFirstAuthor ? checkFirstAuthor(publication.author) : true) &&
      (showPublished ? checkPublished(publication.conference) : true) &&
      (showCurrentYear ? checkCurrentYear(publication.time) : true) &&
      (showConference ? checkConference(publication.conference) : true) &&
      (showJournal ? checkJournal(publication.conference) : true)) ||
    showAll
  );
}

export default function Publication() {
  const [showFirstAuthor, setShowFirstAuthor] = React.useState(false);
  const [showPublished, setShowPublished] = React.useState(false);
  const [showCurrentYear, setShowCurrentYear] = React.useState(false);
  const [showAll, setShowAll] = React.useState(true);
  const [showJournal, setShowJournal] = React.useState(false);
  const [showConference, setShowConference] = React.useState(false);
  const [expandAllAbstract, setExpandAllAbstract] = React.useState(false);

  const handleExpandClick = () => {
    setExpandAllAbstract(!expandAllAbstract);
  }

  return (
    <Main title="Publication">
      <ul>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
          Publication
        </Typography>
      </ul>
      {/* filter */}
      <PublicationFilter
        showAll={showAll}
        setShowAll={setShowAll}
        showFirstAuthor={showFirstAuthor}
        setShowFirstAuthor={setShowFirstAuthor}
        showPublished={showPublished}
        setShowPublished={setShowPublished}
        showCurrentYear={showCurrentYear}
        setShowCurrentYear={setShowCurrentYear}
        showJournal={showJournal}
        setShowJournal={setShowJournal}
        showConference={showConference}
        setShowConference={setShowConference}
      />
      {/* expand all abstract */}
      <FormControlLabel
        label={expandAllAbstract ? "Collapse all abstract" : "Expand all abstract"}
        control={
          <Checkbox
            onChange={handleExpandClick}
            sx={{
              color: pink[800], '&.Mui-checked': {
                color: pink[600],
              },
            }}
            icon={<AutoStoriesOutlinedIcon />}
            checkedIcon={<AutoStoriesIcon />}
          />
        }
      />
      {data.map(
        (publication) =>
          filter(
            publication,
            showFirstAuthor,
            showPublished,
            showCurrentYear,
            showConference,
            showJournal,
            showAll,
          ) && <PublicationCell data={publication} key={publication.title} expandAllAbstract={expandAllAbstract} />,
      )}
      {/* in case no publication to show */}
      {data.filter((publication) =>
        filter(
          publication,
          showFirstAuthor,
          showPublished,
          showCurrentYear,
          showAll,
        ),
      ).length === 0 && <Typography>No publication to show</Typography>}
    </Main>
  );
}
