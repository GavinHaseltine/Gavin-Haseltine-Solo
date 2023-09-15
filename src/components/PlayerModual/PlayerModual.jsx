import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
//import "./PlayerModal.css"
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

export default function PlayerModal() {
    const [newPlayerName, setNewPlayerName] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const players = useSelector((store) => store.playerReducer);



    function handleAll() {
        handleOpen()
        handleGet()
    }

    function handleGet() {
        console.log("in get");

        dispatch({
            type: "FETCH_PLAYERS"
        });
    }

    function handleAdd(event) {
        event.preventDefault();

        dispatch({
            type: "ADD_PLAYER",
            payload: { player_name: newPlayerName }
        });

        setNewPlayerName("")
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
                <Button style={{ pointerEvents: 'none', fontSize: '20px', color: 'white' }}>Players</Button>
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

                        <div ><CloseIcon onClick={handleClose} className='rightalign' /></div>
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>


                        {players.map((player) => {
                            let winrate = (player.games_won / player.games_played * 100).toFixed(1);

                            if (isNaN(winrate)) {
                                winrate = 0;
                            }

                            return (
                                <div key={player.id}>
                                    <li className='name'>{player.player_name}</li>
                                    <ul className='winr'>Games Played: {player.games_played}</ul>
                                    <ul className='winr'>Games Won: {player.games_won}</ul>
                                    <ul className='winr'>Win Rate: {winrate}%</ul>

                                    <div className="icon-container">
                                    <DeleteForeverIcon variant="contained" sx={{
                                        backgroundColor: 'red',
                                        borderRadius: '50%',
                                        width: 40,
                                        height: 40,
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'darkred',
                                        },
                                    }} onClick={() => {
                                        const result = window.confirm(`Are you sure you want to remove ${player.player_name}? This action cannot be reversed!`);
                                        if (result === true) {
                                            dispatch({ type: "DELETE_PLAYER", payload: player.id });
                                        }
                                    }}>Remove Player</DeleteForeverIcon>
                                    </div>
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
                            <Button Button variant="contained" type="submit">Add Player</Button>
                        </form>

                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}