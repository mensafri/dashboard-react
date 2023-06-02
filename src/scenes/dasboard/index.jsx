import React from "react";
import Header from "../../components/Header";
import { Box } from "@mui/material";

export default function Dasboard() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dasboard" subtitle="Selamat Datang di Dashboard" />
      </Box>
    </Box>
  );
}
