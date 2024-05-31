import { Box, Typography } from "@mui/material";
import React from "react";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

const Card = () => {
  return (
    <Box width={"100%"} sx={{ backgroundColor: "var(--bgsoft)" }}>
      <Box
        p={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box display={"flex"} alignItems={"center"} width={"100%"}>
          <SupervisedUserCircleIcon />
          <Typography ml={1}>Total User</Typography>
        </Box>
        <Box mt={2}>
          <Typography sx={{fontSize:{xl:25,lg:20,md:15,sm:10,xs:10}}}>10,982</Typography>
          <Box display={"flex"} alignItems={"center"} mt={1}>
            <Typography sx={{fontSize:{xl:25,lg:12,md:15,sm:10,xs:10}}} color={"#5AA771"} mr={0.5}>
              12%
            </Typography>
            <Typography sx={{fontSize:{xl:25,lg:12,md:15,sm:10,xs:10}}}>more than previous week</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
