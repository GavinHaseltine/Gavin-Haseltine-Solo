import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export function ButtonToUserPage() {
    const history = useHistory()

    const handleToBack = () => {
        
        history.push('/user')
    }

    return(
        <button onClick={handleToBack}>Back</button>
    )

}