import React from "react";
import { Typography } from "@mui/material";

const AgendaEntry = ({ entry }) => {
  return (
    <div style={{marginBottom: 40}}>
      {entry.imagePath && (
        <img
          className="activity-image"
          alt={entry.title}
          src={process.env.PUBLIC_URL + entry.imagePath}
          style={{marginBottom: 30}}
        />
      )}
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
    </div>
  );
};

export default AgendaEntry;
