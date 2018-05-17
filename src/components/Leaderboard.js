import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {HeaderMain} from "../shared/HeaderMain";
import {Settings} from "./Settings";

let fotoOne = require("../images/profilebig.png");
let fotoTwo = require("../images/tobiasbig.png");
let fotoThree = require("../images/yorickbig.png");
let fotoFour = require("../images/nevillebig.png");

export class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            settingsOpen: false
        }
    }

    onChangeSettings() {
        let newSetting = !this.state.settingsOpen;
        this.setState({
            settingsOpen: newSetting
        });
    }

    render() {
        return (
            <div>
                <HeaderMain title="ranglijst">
                    <Link to="#" onClick={() => this.onChangeSettings()} className="settings link">Settings</Link>
                </HeaderMain>
                <main>
                    <section className="Profile-section background dark-theme">
                        <div>
                            <img src={require("../images/1.svg")} alt="Ranking"/>
                            <div>Wc</div>
                        </div>
                        <img src={require("../images/profilebig.png")} alt="Profile" className="offset"/>
                        <div>
                            <div><span className="big">4</span>h<span className="big">24</span>m</div>
                            <div>Op je telefoon</div>
                        </div>
                    </section>
                    <section className="List-container">
                        <aside>
                            <h2>Nog 3 dagen 5 uur 2 min</h2>
                            <h3>15 jan - 21 jan</h3>
                        </aside>
                        <ul>
                            <Link to={{ pathname: "/profile", state: { name: fotoOne, gender: "haar" }}}>
                            <li>
                                <div>1</div>
                                <img src={require("../images/profilesmall1.png")} alt="Profile"/>
                                <div className="content-left">
                                    <span>Fenna</span><span>Wc</span>
                                </div>
                                <div className="content-right">
                                    <span>4h 23m</span><span>Op je telefoon</span>
                                </div>
                            </li>
                            </Link>
                            <Link to={{ pathname: "/profile", state: { name: fotoTwo, gender: "zijn" }}}>
                            <li>
                                <div>2</div>
                                <img src={require("../images/profilesmall2.png")} alt="Profile"/>
                                <div className="content-left">
                                    <span>Tobias</span><span>Badkamer</span>
                                </div>
                                <div className="content-right">
                                    <span>5h 27m</span><span>Op je telefoon</span>
                                </div>
                            </li>
                            </Link>
                            <Link to={{ pathname: "/profile",  state: { name: fotoThree, gender: "zijn" }}}>
                            <li>
                                <div>3</div>
                                <img src={require("../images/profilesmall3.png")} alt="Profile"/>
                                <div className="content-left">
                                    <span>Yorick</span><span>Keuken</span>
                                </div>
                                <div className="content-right">
                                    <span>7h 54m</span><span>Op je telefoon</span>
                                </div>
                            </li>
                            </Link>
                            <Link to={{ pathname: "/profile",  state: { name: fotoFour, gender: "zijn" }}}>
                            <li>
                                <div>4</div>
                                <img src={require("../images/profilesmall4.png")} alt="Profile"/>
                                <div className="content-left">
                                    <span>Neville</span><span>Woonkamer</span>
                                </div>
                                <div className="content-right">
                                    <span>8h 06m</span><span>Op je telefoon</span>
                                </div>
                            </li>
                            </Link>
                        </ul>
                    </section>
                </main>
                <Settings onBackPress={() => this.onChangeSettings()} open={this.state.settingsOpen}/>
            </div>
        );
    }
}
