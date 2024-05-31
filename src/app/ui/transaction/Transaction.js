"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Typography } from "@mui/material";

function createData(image, name, status, date, amount) {
  return { image, name, status, date, amount };
}

const rows = [
  createData("/Avatar.png", "Jhon Doe", "pending", "12-08-2024", 24),
  createData("/Avatar.png", "Jhon Doe", "done", "12-08-2024", 37),
  createData("/Avatar.png", "Jhon Doe", "cancelled", "12-08-2024", 24),
  createData("/Avatar.png", "Jhon Doe", "pending","12-08-2024", 67),
  createData("/Avatar.png", "Jhon Doe", "done", "12-08-2024", 49),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Typography
        p={2}
        variant="h6"
        sx={{ backgroundColor: "var(--bgsoft)", color: "var(--textSoft)" }}
      >
        Latest Transaction{" "}
      </Typography>
      <Table sx={{ minWidth: 300, backgroundColor: "var(--bgsoft)" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell align="left" sx={{ color: "white" }}>
              Status
            </TableCell>
            <TableCell align="center" sx={{ color: "white" }}>
              Date
            </TableCell>
            <TableCell align="center" sx={{ color: "white" }}>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "& td ,& th": { border: 0 }, color: "white" }}
            >
              <TableCell sx={{ color: "white" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar src={row.image} />
                  <Typography ml={2}>{row.name}</Typography>
                </Box>
              </TableCell>

              <TableCell align="center" sx={{ color: "white" }}>
                <Box
                  width={"60%"}
                  sx={{ borderRadius: "5px" }}
                >
                  <Typography
                    sx={{
                      backgroundColor:
                        row.status === "pending"
                          ? "#74664D"
                          : row.status === "cancelled"
                          ? "#754658"
                          : "#667387",
                      borderRadius: "5px", // Apply border radius to Typography
                       // Add some padding for better appearance
                      color: "white", // Ensure text color contrasts with the background
                    }}
                  >
                    {row.status}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                {row.date}
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                {row.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
