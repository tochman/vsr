import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";

import SendIcon from "@mui/icons-material/Send";

const InterestForm = ({ agenda, strip = false }) => {
  const contactFields = { name: "", email: "" };
  const [contact, setContact] = useState(contactFields);
  const [sent, setSent] = useState(false);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const newContact = { ...contact, [name]: value };

    newContact[name] = value;
    setContact(newContact);
  };

  const submitInterestForm = async () => {
    const payload = {
      icon_emoji: ":pencil2:",
      username: contact.name,
      text: `Has submitted an interest form.\nUse ${contact.email} to get in touch.`,
    };
    const { data } = await axios.post(
      `https://hooks.slack.com/services/${process.env.REACT_APP_SLACK_TOKEN}`,
      payload
    );
    data === "ok" && setSent(true);
  };
  return (
    <div className="contact-form-container">
      {!strip && (
        <>
          <Typography variant="h3" component="h1" gutterBottom>
            Intresserad att vara med?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Skicka dina uppgifter så kontaktar vi dig med mer detaljer.
            Intresseanmälan är <strong>inte bindande</strong>.
          </Typography>
        </>
      )}
      {sent ? (
        <div data-cy="thx-message">
          <Typography variant="body1" gutterBottom>
            {`Tack ${contact.name}. Vi kommer att skicka mer info till dig snart.`}
          </Typography>
        </div>
      ) : (
        <div data-cy="form-container">
          {agenda && (
            <div style={{ margin: 5 + "px" }}>
              {agenda.map((entry) => (
                <FormControlLabel control={<Checkbox />} label={entry.title} name={entry.title}/>
              ))}
            </div>
          )}
          <TextField
            multiline
            rows={2}
            maxRows={4}
            name="message"
            placeholder="Eventuellt meddelande"
            style={{ margin: 5 + "px", width: 100 + "%" }}
            onBlur={handleFieldChange}
          />
          <TextField
            size="small"
            label="Ditt namn"
            name="name"
            style={{ margin: 5 + "px" }}
            data-cy="name-input"
            onBlur={handleFieldChange}
          />
          <TextField
            size="small"
            label="Din email"
            name="email"
            style={{ margin: 5 + "px" }}
            data-cy="email-input"
            onBlur={handleFieldChange}
          />
          <Button
            style={{ margin: 4 + "px" }}
            variant="contained"
            endIcon={<SendIcon />}
            size="large"
            data-cy="send-button"
            onClick={submitInterestForm}
          >
            Skicka
          </Button>
        </div>
      )}
    </div>
  );
};

export default InterestForm;
