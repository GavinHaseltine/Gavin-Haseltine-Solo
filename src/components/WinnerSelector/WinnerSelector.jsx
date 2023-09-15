import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function WinnerSelector() {

    const readyPlayers = useSelector((store) => store.readyPlayerReducer);
  const [playerName, setPlayerName] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setPlayerName(event.target.value);
    //console.log(playerName)

    
  };


  useEffect(() => {
    dispatch({
      type: "SET_WINNER",
      payload: playerName
    });
  }, [playerName, dispatch]);

  useEffect(() => {
    console.log(playerName);
  }, [playerName]);


  return (
    <Box sx={{ minWidth: 120, padding: '1em' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Winner</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={playerName}
          label="Select Winner"
          onChange={handleChange}
          displayEmpty
          native={false}
        >
          {readyPlayers.map((player) => (
            <MenuItem key={player.id} value={player}>
              {player.player_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}