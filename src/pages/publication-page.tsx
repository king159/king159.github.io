import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Checkbox from "@mui/material/Checkbox";
import { blue } from "@mui/material/colors";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Card from "@mui/material/Card";

import PublicationCell from "../components/Publication/publication-cell.tsx";
import PublicationFilter from "../components/Publication/publication-filter.tsx";
import data from "../data/publication/publication-data.tsx";
import Main from "../layouts/main.tsx";

interface Publication {
  author: string;
  conference: string;
  time: string;
  title: string;
}

interface Filters {
  showFirstAuthor: boolean;
  showPublished: boolean;
  showCurrentYear: boolean;
  showJournal: boolean;
  showConference: boolean;
  showAll: boolean;
}

function checkPublication(publication: Publication, filters: Filters) {
  const {
    showFirstAuthor,
    showPublished,
    showCurrentYear,
    showJournal,
    showConference,
    showAll,
  } = filters;

  const isFirstAuthor =
    publication.author.startsWith("Jinghao Wang")
  const isPublished = !(
    publication.conference === "arXiv" ||
    publication.conference.includes("under review")
  );
  const isCurrentYear =
    publication.time.split("-")[0] === new Date().getFullYear().toString();
  const isJournal = publication.conference.includes("TPAMI");
  const isConference = !publication.conference.includes("TPAMI");

  return (
    showAll ||
    ((showFirstAuthor ? isFirstAuthor : true) &&
      (showPublished ? isPublished : true) &&
      (showCurrentYear ? isCurrentYear : true) &&
      (showJournal ? isJournal : true) &&
      (showConference ? isConference : true))
  );
}

const countDic = {
  FirstAuthor: 0,
  Published: 0,
  CurrentYear: 0,
  Journal: 0,
  Conference: 0,
  All: data.length,
};

for (const publication of data) {
  if (publication.author.startsWith("Jinghao Wang")) {
    countDic["FirstAuthor"] += 1;
  }
  if (
    !(
      publication.conference.includes("arXiv") ||
      publication.conference.includes("under review")
    )
  ) {
    countDic["Published"] += 1;
  }
  if (publication.time.split("-")[0] === new Date().getFullYear().toString()) {
    countDic["CurrentYear"] += 1;
  }
  if (publication.conference.includes("TPAMI")) {
    countDic["Journal"] += 1;
  }
  if (!publication.conference.includes("TPAMI")) {
    countDic["Conference"] += 1;
  }
}

export default function Publication() {
  const [filters, setFilters] = useState({
    showFirstAuthor: false,
    showPublished: false,
    showCurrentYear: false,
    showAll: true,
    showJournal: false,
    showConference: false,
  });
  const [expandAllAbstract, setExpandAllAbstract] = useState(false);
  const containerRef = React.useRef(null);
  const handleExpandClick = () => {
    setExpandAllAbstract(!expandAllAbstract);
  };

  return (
    <Main title="Publication">
      <Typography sx={{ mt: 4, mb: 2 }} variant="h4" color="black">
        Publication
      </Typography>
      {/* Filter Component */}
      <PublicationFilter
        filters={filters}
        setFilters={setFilters}
        countDic={countDic}
      />
      {/* Expand All Abstract */}
      <FormControlLabel
        label={expandAllAbstract ? "Collapse Abstract" : "Expand Abstract"}
        control={
          <Checkbox
            onChange={handleExpandClick}
            sx={{
              color: "#a0a0a0cc",
              "&.Mui-checked": {
                color: blue[800],
              },
            }}
            icon={<TurnedInNotIcon />}
            checkedIcon={<AutoStoriesIcon />}
          />
        }
      />

      {data.filter((publication) => checkPublication(publication, filters))
        .length === 0 && (
        <div>
          <Slide in={true} timeout={500} unmountOnExit direction="left">
            <Card>
            <Typography
              sx={{
                mt: 4,
                mb: 4,
                display: "flex",
                justifyContent: "center",
              }}
              variant="h6"
              color="black"
            >
              No publication to show
            </Typography>
            </Card>
          </Slide>
        </div>
      )}

      {data.map((publication) => {
        return (
          <Slide
            in={checkPublication(publication, filters)}
            container={containerRef.current}
            direction="left"
            key={publication.title}
            timeout={500}
            unmountOnExit
          >
            <div>
              <PublicationCell
                data={publication}
                expandAllAbstract={expandAllAbstract}
              />
            </div>
          </Slide>
        );
      })}
    </Main>
  );
}
