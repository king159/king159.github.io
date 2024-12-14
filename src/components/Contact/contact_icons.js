import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import Contact from "../../data/sidebar/contact";

export default function ContactIcons() {
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const handleClick = (link, isEmail) => {
    if (isEmail) {
      navigator.clipboard.writeText(link);
      setSnackbar({ open: true, message: "Email copied to clipboard!" });
    } else {
      window.open(link, "_blank");
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setSnackbar({ open: false, message: "" });
  };

  return (
    <div>
      {Contact.map(({ link, icon: Icon, description }) => {
        const isEmail = link.includes("@");
        return (
          <div key={link}>
            <Tooltip title={link} placement="left">
              <Button
                onClick={() => handleClick(link, isEmail)}
                startIcon={<Icon />}
                sx={{ color: "black", textTransform: "none" }}
              >
                {description}
              </Button>
            </Tooltip>
          </div>
        );
      })}

      {/* Single Snackbar for all feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleCloseSnackbar}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
}
