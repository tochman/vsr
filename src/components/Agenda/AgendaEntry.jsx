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
          style={{marginBottom: 30, maxWidth: 500}}
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
      { entry.price &&   <Typography variant="body1" gutterBottom>
        Pris per person: {entry.price}{" "}
      </Typography>}
    </div>
  );
};

export default AgendaEntry;
