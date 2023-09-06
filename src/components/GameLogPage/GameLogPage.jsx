import * as React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonToUserPage } from '../ButtonToUserPage/ButtonToUserPage';
import PlayerSelector from '../PlayerSelector/PlayerSelector';
import DeckSelector from '../DeckSelector/DeckSelector';

export default function GameLogPage() {




    return(
       <div>
       <ButtonToUserPage />
       <h3>Pre-Game</h3>
       <PlayerSelector />
       <DeckSelector />
       <h3>Post-Game</h3>
       </div>
    )
}