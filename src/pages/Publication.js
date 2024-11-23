import React from "react";
import Typography from "@mui/material/Typography";

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

function filter(
  publication,
  showFirstAuthor,
  showPublished,
  showCurrentYear,
  showAll,
) {
  return (
    (((showFirstAuthor ? checkFirstAuthor(publication.author) : true) &&
      (showPublished ? checkPublished(publication.conference) : true) &&
      (showCurrentYear ? checkCurrentYear(publication.time) : true)) ||
      showAll) && showAll
  );
}

export default function Publication() {
  const [showFirstAuthor, setShowFirstAuthor] = React.useState(false);
  const [showPublished, setShowPublished] = React.useState(false);
  const [showCurrentYear, setShowCurrentYear] = React.useState(false);
  const [showAll, setShowAll] = React.useState(true);

  return (
    <Main title="Publication">
      <ul>
        {" "}
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6">
          Publication
        </Typography>
      </ul>
      <PublicationFilter showAll={showAll} setShowAll={setShowAll} showFirstAuthor={showFirstAuthor} setShowFirstAuthor={setShowFirstAuthor} showPublished={showPublished} setShowPublished={setShowPublished} showCurrentYear={showCurrentYear} setShowCurrentYear={setShowCurrentYear} />
      {data.map(
        (publication) =>
          filter(
            publication,
            showFirstAuthor,
            showPublished,
            showCurrentYear,
            showAll
          ) && <PublicationCell data={publication} key={publication.title} />,
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
