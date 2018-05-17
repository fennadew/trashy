import React from 'react';
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/home">Home</Link>
            <Link to="/another">Another</Link>
            <Link to="/nested">Nested</Link>
            <hr/>
        </div>
    )
};