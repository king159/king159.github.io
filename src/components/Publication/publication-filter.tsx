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

interface PublicationFilterProps {
  filters: {
    showAll: boolean;
    showFirstAuthor: boolean;
    showPublished: boolean;
    showCurrentYear: boolean;
    showJournal: boolean;
    showConference: boolean;
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      showAll: boolean;
      showFirstAuthor: boolean;
      showPublished: boolean;
      showCurrentYear: boolean;
      showJournal: boolean;
      showConference: boolean;
    }>
  >;
  countDic: { [key: string]: number };
}

export default function PublicationFilter({
  filters,
  setFilters,
  countDic,
}: PublicationFilterProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (value === "All") {
      const sum: number = Object.values(filters).reduce(
        (acc: number, value: boolean) => acc + (value ? 1 : 0),
        0
      );
      if (sum === 1 && filters.showAll) {
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
        const sum: number = Object.values(updatedFilters).reduce(
          (acc: number, value: boolean) => acc + (value ? 1 : 0),
          0
        );
        if (sum === 0) {
          updatedFilters.showAll = true;
        }
        return updatedFilters;
      });
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
                checked={filters[`show${key}` as keyof typeof filters]}
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
