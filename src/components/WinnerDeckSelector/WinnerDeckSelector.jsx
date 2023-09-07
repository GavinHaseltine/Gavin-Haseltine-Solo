import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function WinnerDeckSelector() {

    const readyDecks = useSelector((store) => store.readyDeckReducer);
    const dispatch = useDispatch();
  const [deckName, setDeckName] = React.useState('');


  const handleChange = (event) => {
    setDeckName(event.target.value);
    console.log(deckName)
  };

  useEffect(() => {
    dispatch({
      type: "SET_DECK_WINNER",
      payload: deckName
    });
  }, [deckName, dispatch]);

  useEffect(() => {
    console.log(deckName);
  }, [deckName]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Deck</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={deckName}
          label="Select Deck"
          onChange={handleChange}
          displayEmpty
          native={false}
        >
          {readyDecks.map((deck) => (
            <MenuItem key={deck.id} value={deck}>
              {deck.deck_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}