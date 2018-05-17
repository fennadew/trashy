import React from 'react';
import {Link} from 'react-router-dom';
import {Login} from '../shared/Login';

export const Signin = () => {
    return (
        <main className="Signup">
            <section className="inner">
            <Login social="Inloggen met Facebook" link="/home">
                <h1>Inloggen</h1>
                <Link to="/home" className="Form-button">Inloggen</Link>
            </Login>
                <p>Nog geen account? <Link to="/signup">Aanmelden</Link></p>
            </section>
        </main>
    );
};
