import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";



export default function ReadyPlayers() {
    const readyPlayers = useSelector((store) => store.readyPlayerReducer);
  
    //console.log('before map', readyPlayers);
  
    return (
      <>
        {readyPlayers.map((player) => {
          //console.log("player:", player.player_name);
          return (
            <div key={player.id}>
              <ul>
                <li>{player.player_name}</li>
              </ul>
            </div>
          );
        })}
      </>
    );
  }


