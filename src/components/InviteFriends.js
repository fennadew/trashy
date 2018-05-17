import React, {Component} from 'react';
import {Header} from "../shared/Header";
import { Link } from 'react-router-dom';

export class InviteFriends extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <Header title="Huisgenoten uitnodigen"/>
                <main className="Signup-container">
                    <p>Nodig je huisgenoten uit voor <span className="GroupName">{this.props.location.state.name}</span></p>
                    <div className="Invite full">track.trash/sjwuhe2</div>
                    <div className="Invite-container">
                        <div className="Invite">Whatsapp</div>
                        <div className="Invite">Copy</div>
                        <div className="Invite">Messenger</div>
                    </div>
                </main>
                <footer className="Invite-footer">
                    <Link to="/home" className="Form-button">Begin</Link>
                </footer>
            </div>
        );
    }
}