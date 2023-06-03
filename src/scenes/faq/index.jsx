import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { ExpandMoreOutlined } from "@mui/icons-material";

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Question" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            What is the purpose of this project?
          </Typography>
          <Typography variant="body1">
            This project is a project to help students learn how to use the
            application.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            What is the purpose of this project?
          </Typography>
          <Typography variant="body1">
            This project is a project to help students learn how to use the
            application.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            What is the purpose of this project?
          </Typography>
          <Typography variant="body1">
            This project is a project to help students learn how to use the
            application.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
