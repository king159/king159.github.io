import React from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";

export default function PublicationFilter(props) {
    const handleChangeAll = (event) => {
        props.setShowAll(event.target.checked);
        props.setShowFirstAuthor(false);
        props.setShowPublished(false);
        props.setShowCurrentYear(false);
    };
    const handleChangeFirstAuthor = (event) => {
        props.setShowFirstAuthor(event.target.checked);
        if (event.target.checked) {
            props.setShowAll(false);
        }
        if (
            !props.showCurrentYear &&
            !props.showPublished &&
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
        if (!showCurrentYear && !showFirstAuthor && !event.target.checked) {
            props.setShowAll(true);
        }
    };
    const handleChangeCurrentYear = (event) => {
        props.setShowCurrentYear(event.target.checked);
        if (event.target.checked) {
            props.setShowAll(false);
        }
        if (!showPublished && !showFirstAuthor && !event.target.checked) {
            props.setShowAll(true);
        }
    };

    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
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
            </RadioGroup>
        </FormControl>
    );
}
