import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const Drugs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Drugs" subtitle="Product Information" />

      <Accordion defaultExpanded backgroundColor='#121212'>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[100]} variant="h5">
            Cosentyx Drug
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This drug is for sale is United States, United Kingdom, Canada, Russia, Australia,
            New Zealeand and more.  This medication is used to assist with multiple conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[100]} variant="h5">
            Diovan Drug
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This drug is for sale is United States, United Kingdom, Canada, Russia, Australia,
            New Zealeand and more.  This medication is used to assist with multiple conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[100]} variant="h5">
            Glivec Drug
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This drug is for sale is United States, United Kingdom, Canada, Russia, Australia,
          New Zealeand and more.  This medication is used to assist with multiple conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[100]} variant="h5">
            Entresto Drug
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This drug is for sale is United States, United Kingdom, Canada, Russia, Australia,
          New Zealeand and more.  This medication is used to assist with multiple conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[100]} variant="h5">
            Femara Drug
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This drug is for sale is United States, United Kingdom, Canada, Russia, Australia,
          New Zealeand and more.  This medication is used to assist with multiple conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[100]} variant="h5">
            Clozaril Drug
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This drug is for sale is United States, United Kingdom, Canada, Russia, Australia,
          New Zealeand and more.  This medication is used to assist with multiple conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Drugs;
