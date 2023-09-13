import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import PlayerModal from '../PlayerModual/PlayerModual';
import DeckModal from '../DeckModal/DeckModal';
import { ButtonToGame } from '../ButtonToGame/ButtonToGame';
import HistoryButton from '../HistoryButton/HistoryButton';
import "./UserPage.css"


function UserPage() {

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username} </h2>
      <img className='mid' src="/images/NoumenonStats.png" align="middle"></img>
      <div className='playerMod'><ButtonToGame /></div>
      <PlayerModal />
      <DeckModal />
      <HistoryButton />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
