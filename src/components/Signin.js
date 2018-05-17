import React from 'react';
import {Link} from 'react-router-dom';
import {Login} from '../shared/Login';

export const Signin = () => {
    return (
        <main className="Signup">
            <Login social="Inloggen met Facebook" link="/leaderboard">
                <Link to="/home" className="Form-button">Inloggen</Link>
            </Login>
            <p>Nog geen account? <Link to="/signup">Aanmelden</Link></p>
        </main>
    );
};
