import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
//import "./PlayerModal.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 600,
    overflow: 'scroll',
    width: 300,
    bgcolor: 'rgb(140, 162, 163)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PlayerModal() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const players = useSelector((store) => store.playerReducer);

  

  function handleAll(){
    handleOpen()
    handleGet()
  }

  function handleGet(){
    console.log("in get");

    dispatch({
        type: "FETCH_PLAYERS"
      });
  }

  function handleAdd(event){
    event.preventDefault();

    dispatch({
        type: "ADD_PLAYER",
        payload: { player_name: newPlayerName}
      });

      setNewPlayerName("")
  }


  return (
    <div>
      <div style={{
      display: 'flex',
      justifyContent: 'center',
      border: '3px solid black',
      padding: '100px',
      margin: '10px',
      background: 'rgb(14, 49, 125)',
      cursor: 'pointer',
      transition: 'background-color 0.5s'
    }}
     onClick={handleAll}
     onMouseEnter={(event) => {
        event.target.style.backgroundColor = 'rgb(14, 49, 175)';
      }}
      onMouseLeave={(event) => {
        event.target.style.backgroundColor = 'rgb(14, 49, 125)';
      }}
     > 
     <Button style={{ pointerEvents: 'none', fontSize: '20px'  }}>Players</Button>
   </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">

            Player List

            <div ><CloseIcon onClick={handleClose} className='rightalign'/></div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            

            {players.map((player) => {
                let winrate = ( player.games_won / player.games_played * 100).toFixed(1);
                return (
                    <div key={player.id}>
                     <li>{player.player_name}</li>
                    <ul>Win Rate: {winrate}%</ul> 
                    <button onClick={() => dispatch({ type: "DELETE_PLAYER", payload: player.id })}>Remove Player</button> 
                    <div> <div><hr id="rounded" /></div> </div>
                  </div>
                )
            })}
           

           <form onSubmit={handleAdd}>
                <input 
                type="text" 
                placeholder='Enter Player Name'
                value={newPlayerName}
                onChange={(event) => setNewPlayerName(event.target.value)}
                />
                <button type="submit">Add Player</button>
            </form>
    
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}