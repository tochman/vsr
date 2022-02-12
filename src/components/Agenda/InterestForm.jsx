import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

const InterestForm = () => {
  const contactFields = { name: "", email: "" };
  const [contact, setContact] = useState(contactFields);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const newContact = contact;
    debugger
    newContact[name] = value;
    setContact(newContact);
  };
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Intresserad att vara med?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Skicka dina uppgifter så kontaktar vi dig med mer detaljer.
        Intresseanmälan är <strong>inte bindande</strong>.
      </Typography>
      <TextField
        size="small"
        label="Ditt namn"
        name="name"
        value={contact.name}
        style={{ margin: 5 + "px" }}
        onChange={(e) => handleFieldChange(e)}
      />
      <TextField
        size="small"
        label="Din email"
        name="email"
        value={contact.email}
        style={{ margin: 5 + "px" }}
        onChange={(e) => handleFieldChange(e)}
      />
      <Button
        style={{ margin: 4 + "px" }}
        variant="contained"
        endIcon={<SendIcon />}
        size="large"
      >
        Skicka
      </Button>
      <div>{JSON.stringify(contact)}</div>
    </>
  );
};

export default InterestForm;
