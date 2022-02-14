import React from "react";
import { Typography } from "@mui/material";

const AgendaEntry = ({ entry }) => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        {entry.title}{" "}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {entry.description}{" "}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {entry.format}{" "}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {entry.practical_info}{" "}
      </Typography>
    </>
  );
};

export default AgendaEntry;
