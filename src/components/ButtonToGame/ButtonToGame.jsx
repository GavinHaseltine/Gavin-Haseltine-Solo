import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export function ButtonToGame() {
    const history = useHistory()

    const handleToNext = () => {
        
        history.push('/gamelogpage')
    }

    return(
        <button onClick={handleToNext}>Log New Game!</button>
    )

}