import React from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";

const filterMapper = {
  All: "All",
  "First Author": "First Author",
  Published: "Published/Accepted",
  "Current Year": `Since ${new Date().getFullYear()}`,
  Journal: "Journal Only",
  Conference: "Conference Only",
};

export default function PublicationFilter(props) {
  const handleChange = (event) => {
    if (event.target.value === "All") {
      props.setShowFirstAuthor(event.target.checked);
    }
  };

  return (
    <FormControl>
      <RadioGroup row>
        {Object.keys(filterMapper).map((key) => (
          <FormControlLabel
            key={key}
            label={`${filterMapper[key]} (${props.countDic[key]})`}
            control={
              <Checkbox
                value={key}
                checked={props["show" + key.split(" ").join("")]}
                onChange={handleChange}
              />
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
