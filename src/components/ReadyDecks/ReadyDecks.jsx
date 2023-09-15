import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";



export default function ReadyDecks() {
    const readyDecks = useSelector((store) => store.readyDeckReducer);
  
   // console.log('before map', readyDecks);
  
    return (
      <>
        {readyDecks.map((deck) => {
          return (
            <div key={deck.id}>
              <ul>
                <li style={{ fontSize: '18px'}}>{deck.deck_name}</li>
              </ul>
            </div>
          );
        })}
      </>
    );
  }