import React from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";

const filterLabelMapper = {
  All: "All",
  FirstAuthor: "First Author",
  Published: "Published/Accepted",
  CurrentYear: `Since ${new Date().getFullYear()}`,
  Journal: "Journal Only",
  Conference: "Conference Only",
};

export default function PublicationFilter({ filters, setFilters, countDic }) {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (value === "All") {
      let sum = Object.values(filters).reduce((acc, value) => acc + value, 0);
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
      setFilters((prevFilters) => {
        const updatedFilters = {
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
        let sum = Object.values(updatedFilters).reduce(
          (acc, value) => acc + value,
          0,
        );
        if (sum == 0) {
          updatedFilters.showAll = true;
        }
        return updatedFilters;
      });
    }
  };

  return (
    <FormControl>
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
                sx={{ color: "#a0a0a0cc" }}
              />
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
