import React from 'react';
import {Link} from 'react-router-dom';
import {Login} from '../shared/Login';

export const Signup = () => {
    return (
        <main className="Signup">
            <section className="inner">
                <Login social="Aanmelden met Facebook" link="/signup-steps">
                    <h1>Aanmelden</h1>
                    <Link to="/signup-steps" className="Form-button">Aan de slag</Link>
                </Login>
                <p>Al een account? <Link to="/signin">Inloggen</Link></p>
            </section>
        </main>
    );
};
