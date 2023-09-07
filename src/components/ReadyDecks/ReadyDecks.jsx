import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";



export default function ReadyDecks() {
    const readyDecks = useSelector((store) => store.readyDeckReducer);
  
    console.log('before map', readyDecks);
  
    return (
      <>
        {readyDecks.map((deck) => {
          console.log("player:", deck.player_name);
          return (
            <div key={deck.id}>
              <ul>
                <li>{deck.deck_name}</li>
              </ul>
            </div>
          );
        })}
      </>
    );
  }