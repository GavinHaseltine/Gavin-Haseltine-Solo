import * as React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { put, takeLatest } from 'redux-saga/effects';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import axios from 'axios';


export default function FinalizeButton() {
    const history = useHistory()
    //all players & decks
    const readyDecks = useSelector((store) => store.readyDeckReducer);
    const readyPlayers = useSelector((store) => store.readyPlayerReducer);

    //Winners
    const playerWinner = useSelector((store) => store.winnerPlayerReducer);
    const deckWinner = useSelector((store) => store.winnerDeckReducer);

    useEffect(() => {
        console.log("useEffect", playerWinner);
      }, [playerWinner]);

      useEffect(() => {
        console.log("useEffect", deckWinner);
      }, [deckWinner]);

    function handleSubmit(){
        console.log(playerWinner);
        console.log(deckWinner);

        for(let deck of readyDecks){

            if(deck === deckWinner){
            console.log("Deck winner:", deck)
            axios.put(`/api/deckwin/${deck.id}`)
    }  else {
            console.log("Deck losers:", deck)
            axios.put(`/api/deckloser/${deck.id}`)
        }
        }

        for(let player of readyPlayers){

            if(player === playerWinner){
            console.log("Player winner:", player)
            axios.put(`/api/playerwin/${player.id}`)
        } else {
            console.log("Player losers:", player)
            axios.put(`/api/playerloser/${player.id}`)
            
        }
        }

        history.push('/user')

    }



    return(
        <button onClick={handleSubmit}>Finalize</button>
    )
}