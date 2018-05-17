import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../shared/Login';

export const Signup = () => {
        return (
            <main className="Signup">
                <Login social="Aanmelden met Facebook" link="/signup-steps">
                <Link to="/signup-steps" className="Form-button">Aan de slag</Link>
                </Login>
                <p>Al een account? <Link to="/signin">Inloggen</Link></p>
            </main>
        );
};
