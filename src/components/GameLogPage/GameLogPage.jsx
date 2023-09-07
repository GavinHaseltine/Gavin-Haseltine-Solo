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


export default function GameLogPage() {

    return(
       <div>
       <ButtonToUserPage />
       <h3>Pre-Game</h3>
       <PlayerSelector />
       <DeckSelector />
       <p>---</p>
       <h4>Current Players In-Game:</h4>
       <ReadyPlayers />
       <p>---</p>
       <h4>Current Decks In-Game:</h4>
       <ReadyDecks />
       <h3>Post-Game</h3>
       <h5>Winner:</h5>
       <WinnerSelector />
       <WinnerDeckSelector />

       </div>
    )
}