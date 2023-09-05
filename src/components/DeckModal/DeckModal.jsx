import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  export default function DeckModal() {
    const [newDeckName, setNewDeckName] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const decks = useSelector((store) => store.deckReducer);

    function handleAll(){
        handleOpen()
        handleGet()
      }
    
      function handleGet(){
        console.log("in get");
    
        dispatch({
            type: "FETCH_DECKS"
          });
      }

      function handleAdd(event){
        event.preventDefault();
    
        dispatch({
            type: "ADD_DECK",
            payload: { deck_name: newDeckName}
          });
    
          setNewDeckName("")
      }

    return (
        <div>
          <Button onClick={handleAll}>Players</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Player List
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                
    
                {decks.map((deck) => {
                    let winrate = ( deck.deck_wins / deck.deck_plays * 100).toFixed(1);
                    return (
                        <div key={deck.id}>
                         <li>{deck.deck_name}</li>
                        <ul>Win Rate: {winrate}%</ul> 
                        <button onClick={() => dispatch({ type: "DELETE_DECK", payload: deck.id })}>Remove Player</button> 
                      </div>
                    )
                })}
    
               <form onSubmit={handleAdd}>
                    <input 
                    type="text" 
                    placeholder='Enter Player Name'
                    value={newDeckName}
                    onChange={(event) => setNewDeckName(event.target.value)}
                    />
                    <button type="submit">Add Player</button>
                </form>
        
              </Typography>
            </Box>
          </Modal>
        </div>
      );
    }
