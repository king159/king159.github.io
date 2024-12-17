import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Tooltip from "@mui/material/Tooltip";

import Contact from "../../data/sidebar/contact.tsx";

export default function ContactIcons() {
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });

  const handleClick: (link: string, isEmail: boolean) => void = (
    link,
    isEmail
  ) => {
    if (isEmail) {
      navigator.clipboard.writeText(link);
      setSnackbar({ open: true, message: "Email copied to clipboard!" });
    } else {
      window.open(link, "_blank");
    }
  };

  const handleCloseSnackbar = (event: React.SyntheticEvent, reason?: string) => {
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
          <IconButton size="small" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
}
