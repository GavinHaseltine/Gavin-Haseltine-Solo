import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import "./DeckModal.css"



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 600,
    overflow: 'scroll',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  export default function DeckModal() {
    const [newDeckName, setNewDeckName] = useState("");
    const [newDeckURL, setNewDeckURL] = useState("");
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
            payload: { deck_name: newDeckName, deck_list: newDeckURL}
          });
    
          setNewDeckName("")
          setNewDeckURL("")
      }

    return (
        <div>
          <Button onClick={handleAll}>Decks</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                
                Deck List

                <div ><CloseIcon onClick={handleClose} className='rightalign'/></div>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                
    
                {decks.map((deck) => {
                    let winrate = ( deck.deck_wins / deck.deck_plays * 100).toFixed(1);
                    return (
                        <div key={deck.id}>
                         <li>{deck.deck_name}</li>
                        <ul>Win Rate: {winrate}%</ul> 
                      <div> <a href={deck.deck_list} target="_blank" rel="noopener noreferrer">{deck.deck_name} Deck List </a> </div>
                        <button onClick={() => dispatch({ type: "DELETE_DECK", payload: deck.id })}>Remove Deck</button> 
                        <div> <div><hr id="rounded" /></div> </div>
                      </div>
                      
                    )
                })}
                
    
               <form onSubmit={handleAdd}>
                    <input 
                    type="text" 
                    placeholder='Enter Deck Name'
                    value={newDeckName}
                    onChange={(event) => setNewDeckName(event.target.value)}
                    />
                    <input 
                    type="text" 
                    placeholder='Deck URL'
                    value={newDeckURL}
                    onChange={(event) => setNewDeckURL(event.target.value)}
                    />
                    <button type="submit">Add Deck</button>
                </form>
        
              </Typography>
            </Box>
          </Modal>
        </div>
      );
    }
