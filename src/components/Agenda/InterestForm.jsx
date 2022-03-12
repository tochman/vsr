/* eslint-disable no-extend-native */
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

Array.prototype.toSentence = function (comma, and) {
  const b = this.pop();
  return (b ? (this.length ? [this.join(comma || ", "), b] : [b]) : this).join(
    and || " and "
  );
};

const InterestForm = ({ agenda, strip = false }) => {
  const contactFields = { name: "", email: "" };
  const [contact, setContact] = useState(contactFields);
  const [eventsInFocus, setEventsInFocus] = useState([]);
  const [sent, setSent] = useState(false);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const newContact = { ...contact, [name]: value };

    newContact[name] = value;
    setContact(newContact);
  };

  const handleCheckbox = (event) => {
    setEventsInFocus([...eventsInFocus, event.target.name]);
  };

  const submitInterestForm = async () => {
    const text = `Has submitted an interest form for ${eventsInFocus.toSentence()}.\nUse ${
      contact.email
    } to get in touch.`;
    const payload = {
      icon_emoji: ":pencil2:",
      message: contact.message,
      username: contact.name,
      text: text,
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
                <FormControlLabel
                  control={
                    <Checkbox
                      data-cy={`check-${entry.id}`}
                      inputProps={{ entry: JSON.stringify(entry) }}
                    />
                  }
                  key={`check-${entry.id}`}
                  label={entry.title}
                  name={entry.title}
                  onChange={handleCheckbox}
                />
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
