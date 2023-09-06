import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from "react-redux";

export default function PlayerSelector() {
    const [player, setPlayer] = React.useState('');
    const players = useSelector((store) => store.playerReducer);
  
    const handleChange = (event) => {
      setPlayer(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Player</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={player}
            label="Select Player"
            onChange={handleChange}
          >
            {players.map((player) => {
                
                return (
                    <div key={player.id}>
                     <MenuItem value={player.id}>{player.player_name}</MenuItem> 
                  </div>
                )
            })}
            
         
          </Select>
        </FormControl>
      </Box>
    );
  }