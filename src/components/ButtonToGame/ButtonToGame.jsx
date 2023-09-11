import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Button from '@mui/material/Button';
import "./ButtonToGame.css"

export function ButtonToGame() {
    const history = useHistory()


    const handleToNext = () => {
        
        history.push('/gamelogpage')
    }

    return(
        <div className="center">
        <Button variant="contained" color="success" onClick={handleToNext}>Log New Game!</Button>
        </div>
    )

}