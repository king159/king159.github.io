import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";

import Contact from "../../data/contact";

export default function ContactIcons() {
  const [open, setOpen] = React.useState(false);

  const handleClickForEmail = () => {
    navigator.clipboard.writeText(Contact[0].link);
    setOpen(true);
  };

  function handleClick(link) {
    window.open(link, "_blank");
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <ul className="icons">
      {Contact.map((s) => (
        <div key={s.link}>
          <Tooltip
            disableFocusListener
            disableTouchListener
            title={s.link}
            placement="left-start"
          >
            <Button
              onClick={() =>
                s.link.includes("@") ? handleClickForEmail : handleClick(s.link)
              }
              startIcon={<s.icon />}
              sx={{ color: "black", textTransform: "none" }}
            >
              {s.description}
            </Button>
          </Tooltip>
          {s.link.includes("@") && (
            <Snackbar
              open={open}
              autoHideDuration={4000}
              onClose={handleClose}
              message="Email copied to clipboard!"
              action={action}
            />
          )}
        </div>
      ))}
    </ul>
  );
}
