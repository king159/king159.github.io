import React from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";

export default function PublicationFilter(props) {
  const handleChangeJournal = (event) => {
    props.setShowJournal(event.target.checked);
    if (event.target.checked) {
      props.setShowAll(false);
      props.setShowConference(false);
    }
    if (
      !props.showCurrentYear &&
      !props.showPublished &&
      !props.showConference &&
      !props.showFirstAuthor &&
      !event.target.checked
    ) {
      props.setShowAll(true);
    }
  };
  const handleChangeConference = (event) => {
    props.setShowConference(event.target.checked);
    if (event.target.checked) {
      props.setShowAll(false);
      props.setShowJournal(false);
    }
    if (
      !props.showCurrentYear &&
      !props.showPublished &&
      !props.showJournal &&
      !props.showFirstAuthor &&
      !event.target.checked
    ) {
      props.setShowAll(true);
    }
  };
  const handleChangeAll = (event) => {
    props.setShowAll(event.target.checked);
    props.setShowFirstAuthor(false);
    props.setShowPublished(false);
    props.setShowCurrentYear(false);
    props.setShowJournal(false);
    props.setShowConference(false);
  };
  const handleChangeFirstAuthor = (event) => {
    props.setShowFirstAuthor(event.target.checked);
    if (event.target.checked) {
      props.setShowAll(false);
    }
    if (
      !props.showCurrentYear &&
      !props.showPublished &&
      !props.showJournal &&
      !props.showConference &&
      !event.target.checked
    ) {
      props.setShowAll(true);
    }
  };
  const handleChangePublished = (event) => {
    props.setShowPublished(event.target.checked);
    if (event.target.checked) {
      props.setShowAll(false);
    }
    if (
      !props.showCurrentYear &&
      !props.showFirstAuthor &&
      !props.showJournal &&
      !props.showConference &&
      !event.target.checked
    ) {
      props.setShowAll(true);
    }
  };
  const handleChangeCurrentYear = (event) => {
    props.setShowCurrentYear(event.target.checked);
    if (event.target.checked) {
      props.setShowAll(false);
    }
    if (
      !props.showPublished &&
      !props.showFirstAuthor &&
      !props.showJournal &&
      !props.showConference &&
      !event.target.checked
    ) {
      props.setShowAll(true);
    }
  };

  return (
    <FormControl>
      <RadioGroup row>
        <FormControlLabel
          label="All"
          control={
            <Checkbox
              defaultChecked
              checked={props.showAll}
              onChange={handleChangeAll}
            />
          }
        />
        <FormControlLabel
          label="First Author"
          control={
            <Checkbox
              checked={props.showFirstAuthor}
              onChange={handleChangeFirstAuthor}
            />
          }
        />
        <FormControlLabel
          label="Published/Accepted"
          control={
            <Checkbox
              checked={props.showPublished}
              onChange={handleChangePublished}
            />
          }
        />
        <FormControlLabel
          label={`Since ${new Date().getFullYear()}`}
          control={
            <Checkbox
              checked={props.showCurrentYear}
              onChange={handleChangeCurrentYear}
            />
          }
        />
        <FormControlLabel
          label="Journal Only"
          control={
            <Checkbox
              checked={props.showJournal}
              onChange={handleChangeJournal}
            />
          }
        />
        <FormControlLabel
          label="Conference Only"
          control={
            <Checkbox
              checked={props.showConference}
              onChange={handleChangeConference}
            />
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
