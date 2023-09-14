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
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



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

export default function DeckModal() {
    const [newDeckName, setNewDeckName] = useState("");
    const [newDeckURL, setNewDeckURL] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const decks = useSelector((store) => store.deckReducer);

    function handleAll() {
        handleOpen()
        handleGet()
    }

    function handleGet() {
        console.log("in get");

        dispatch({
            type: "FETCH_DECKS"
        });
    }

    function handleAdd(event) {
        event.preventDefault();

        dispatch({
            type: "ADD_DECK",
            payload: { deck_name: newDeckName, deck_list: newDeckURL }
        });

        setNewDeckName("")
        setNewDeckURL("")
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                border: '3px solid black',
                padding: '50px',
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
                <Button style={{ pointerEvents: 'none', fontSize: '20px', color: 'white' }}>Decks</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">

                        Deck List

                        <div ><CloseIcon onClick={handleClose} className='rightalign' /></div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>


                        {decks.map((deck) => {
                            let winrate = (deck.deck_wins / deck.deck_plays * 100).toFixed(1);
                            return (
                                <div key={deck.id}>
                                    <li className='name'>{deck.deck_name}</li>
                                    <ul className='winr'>Win Rate: {winrate}%</ul>
                                    <div> <a href={deck.deck_list} target="_blank" rel="noopener noreferrer">{deck.deck_name} Deck List </a> </div>

                                    <div className="icon-container">
                                    <DeleteForeverIcon className='delete' sx={{
                                        backgroundColor: 'red',
                                        borderRadius: '50%',
                                        width: 40,
                                        height: 40,
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'darkred',
                                        },
                                    }} onClick={() => {
                                        const result = window.confirm(`Are you sure you want to remove ${deck.deck_name}? This action cannot be reversed!`);
                                        if (result === true) {
                                            dispatch({ type: "DELETE_DECK", payload: deck.id });
                                        }
                                    }}>Remove Deck</DeleteForeverIcon>
                                    </div>
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
                            <Button variant="contained" type="submit">Add Deck</Button>
                        </form>

                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
