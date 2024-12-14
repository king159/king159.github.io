import Box from "@mui/material/Box";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const UpdateBubble = () => (
  <Box sx={{ position: "fixed", bottom: 10, left: 10, right: 0 }}>
    <Button variant="extended" sx={{ textTransform: "none" }} disabled>
      <PriorityHighIcon sx={{ color: "#ffb39a", marginLeft: -1 }} />
      <Typography sx={{ fontSize: "12pt", color: "black" }}>
        Latest update: 2024-12
      </Typography>
    </Button>
  </Box>
);

export default UpdateBubble;
