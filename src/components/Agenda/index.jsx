import React, {useEffect, useState} from "react";
import { CssBaseline, Typography, Container } from "@mui/material";
import InterestForm from './InterestForm'
import axios from 'axios'
import AgendaEntry from './AgendaEntry'

const Agenda = () => {
  const [entries, setEntries] = useState([])
  const fetchEntries = async () => {
    const { data } = await axios.get(`./agenda.json`)
    setEntries(data.entries)
  }
  useEffect(() => {
    fetchEntries()
  }, [])
  
  return (
    <>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h1" component="h1" gutterBottom>
          Aktiviteter
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
        <img src={process.env.PUBLIC_URL + '/assets/workshop_1.svg'} /> 
        </Typography>
        {entries.map(entry => (<AgendaEntry entry={entry} />))}
        
        <InterestForm />
      </Container>
    </>
  );
};

export default Agenda;
