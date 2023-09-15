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
       <div style={{ padding: '20px'}}>
        <div>
       <ButtonToUserPage />
       </div>
       <div> <div><hr className="rounded" /></div> </div>
       <h3 style={{ padding: '20px'}}>Pre-Game</h3>
       <PlayerSelector />
       <DeckSelector />
       <div> <div><hr className="rounded" /></div> </div>
       <h4 style={{ padding: '10px'}}>Current Players In-Game:</h4>
       <ReadyPlayers />
       <h4 style={{ padding: '10px'}}>Current Decks In-Game:</h4> 
       <ReadyDecks />
       <div> <div><hr className="rounded" /></div> </div>
       <h3 style={{ padding: '20px'}}>Post-Game</h3>
       <h5 style={{ padding: '10px'}}>Winner:</h5>
       <WinnerSelector />
       <WinnerDeckSelector />
       <FinalizeButton />
       </div>
    )
}