import { Box, Button, Typography } from "@mui/material";
import React from "react";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const Rightbar = () => {
  return (
    <Box width={"100%"} height={"100%"} bgcolor={"var(--bgsoft)"}>
      <Box gap={2} p={2} display={"flex"} flexDirection={"column"}>
        <Box width={"48%"} display={"flex"} justifyContent={"space-between"}>
          <LocalFireDepartmentIcon sx={{ color: "#EC984D" }} />
          <Typography>Available Now</Typography>
        </Box>
        <Typography fontWeight={800}>
          How to use new version of the admin dashboard?
        </Typography>
        <Typography color={"var(--textSoft)"}>
          Takes 4 minutes to learn
        </Typography>
        <Typography>
          Est ut irure fugiat sunt incididunt tempor ad sint dolore enim
          laborum.
        </Typography>
        <Box>
          <Button variant="contained" sx={{bgcolor:"#5956C2"}}> Watch</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
