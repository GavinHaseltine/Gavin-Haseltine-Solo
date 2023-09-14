import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function ButtonToUserPage() {
    const history = useHistory()

    const handleToBack = () => {
        
        history.push('/user')
    }

    return(
        <ArrowBackIcon sx={{
            backgroundColor: 'rgb(14, 49, 125)',
            borderRadius: '50%',
            width: 40,
            height: 40,
            color: 'white',
            '&:hover': {
                backgroundColor: 'darkred',
            },
        }} onClick={handleToBack}>Back</ArrowBackIcon>
    )

}