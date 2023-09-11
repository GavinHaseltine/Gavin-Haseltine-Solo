import * as React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonToUserPage } from '../ButtonToUserPage/ButtonToUserPage';
import PlayerSelector from '../PlayerSelector/PlayerSelector';
import DeckSelector from '../DeckSelector/DeckSelector';
import ReadyPlayers from '../ReadyPlayers/ReadyPlayers';
import ReadyDecks from '../ReadyDecks/ReadyDecks';
import WinnerSelector from '../WinnerSelector/WinnerSelector';
import WinnerDeckSelector from '../WinnerDeckSelector/WinnerDeckSelector';
import FinalizeButton from '../FinalizeButton/FinalizeButton';
import "./GameLogPage.css"


export default function GameLogPage() {

    return(
       <div>
       <ButtonToUserPage />
       <h3>Pre-Game</h3>
       <PlayerSelector />
       <DeckSelector />
       <div> <div><hr className="rounded" /></div> </div>
       <h4>Current Players In-Game:</h4>
       <ReadyPlayers />
       <h4>Current Decks In-Game:</h4> 
       <ReadyDecks />
       <div> <div><hr className="rounded" /></div> </div>
       <h3>Post-Game</h3>
       <h5>Winner:</h5>
       <WinnerSelector />
       <WinnerDeckSelector />
       <FinalizeButton />

       </div>
    )
}