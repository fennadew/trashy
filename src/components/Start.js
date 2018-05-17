import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../styles/App.css';

export class Start extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <main className="Start">
                    <h1 className="Start-title">Track 'n Trash</h1>
                    <div>
                        <Link to="/guide" className="Start-button">Start</Link>
                    </div>
            </main>
        );
    }
}
