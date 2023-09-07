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

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={playerName}
          label="Age"
          onChange={handleChange}
        >
            return (
      
        {readyPlayers.map((player) => {
          console.log("player:", player.player_name);
          return (
            <div key={player.id}>
              
              <MenuItem value={player.player_name}>{player.player_name}</MenuItem>
                
              
            </div>
          );
        })}
     
    );
        </Select>
      </FormControl>
    </Box>
  );
}