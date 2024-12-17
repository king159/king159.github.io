import React from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { styled } from "@mui/material/styles";

const filterLabelMapper: { [key: string]: string } = {
  All: "All",
  FirstAuthor: "First Author",
  Published: "Published/Accepted",
  CurrentYear: `Since ${new Date().getFullYear()}`,
  Journal: "Journal Only",
  Conference: "Conference Only",
};

const MyFormControl = styled(FormControl)({
  border: "2.5px solid #a0a0a04d",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
});

export default function PublicationFilter({
  filters,
  setFilters,
  countDic,
}: {
  filters: { [key: string]: boolean };
  setFilters: (filters: { [key: string]: boolean }) => void;
  countDic: { [key: string]: number };
}) {
  const handleChange = (event) => {
    const { value, checked }: { value: string; checked: boolean } =
      event.target;
    if (value === "All") {
      let sum: number = Object.values(filters).reduce(
        (acc: number, value: number) => acc + value,
        0
      );
      if (sum == 1 && filters.showAll) {
        return;
      }
      setFilters({
        showAll: checked,
        showFirstAuthor: false,
        showPublished: false,
        showCurrentYear: false,
        showJournal: false,
        showConference: false,
      });
    } else {
      setFilters(
        (prevFilters: {
          [key: string]: boolean;
        }): { [key: string]: boolean } => {
          const updatedFilters: { [key: string]: boolean } = {
            ...prevFilters,
            showAll: false, // Uncheck "All" if any specific filter is toggled
            [`show${value.replace(" ", "")}`]: checked,
          };

          // Logic: Journal and Conference cannot be selected simultaneously
          if (value === "Journal" && checked) {
            updatedFilters.showConference = false;
          } else if (value === "Conference" && checked) {
            updatedFilters.showJournal = false;
          }
          let sum: number = Object.values(updatedFilters).reduce(
            (acc: number, value: number) => acc + value,
            0
          );
          if (sum == 0) {
            updatedFilters.showAll = true;
          }
          return updatedFilters;
        }
      );
    }
  };

  return (
    <MyFormControl>
      <RadioGroup row>
        {Object.keys(filterLabelMapper).map((key) => (
          <FormControlLabel
            key={key}
            label={`${filterLabelMapper[key]} (${countDic[key]})`}
            control={
              <Checkbox
                value={key}
                checked={filters[`show${key}`]}
                onChange={handleChange}
                sx={{ color: "#a0a0a0cc", paddingLeft: "1em" }}
              />
            }
          />
        ))}
      </RadioGroup>
    </MyFormControl>
  );
}
