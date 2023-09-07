import * as React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


export default function FinalizeButton() {
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
        } else {
            console.log("Deck losers:", deck)
        }
        }

        for(let player of readyPlayers){

            if(player === playerWinner){
            console.log("Player winner:", player)
        } else {
            console.log("Player losers:", player)
        }
        }

    }



    return(
        <button onClick={handleSubmit}>Finalize</button>
    )
}