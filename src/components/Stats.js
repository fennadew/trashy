import React, {Component} from 'react';
import { TabView } from '../shared/Tab'
import {HeaderMain} from "../shared/HeaderMain";
import { Link } from 'react-router-dom';

export class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
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
                <HeaderMain title="Statistieken">
                    <Link to="/settings" className="settings link">Settings</Link>
                </HeaderMain>
                <main>
                    <section className="Profile-section dark-theme side">
                        <img src={require("../images/profilebig.png")} alt="Profile"/>
                        <div>
                            <div className="big">Totaal</div>
                            <div><span className="medium">203</span>h<span className="medium">24</span>m</div>
                            <div>Op je telefoon</div>
                        </div>
                    </section>
                    <section className='Graph-container'>
                        <TabView />
                    </section>
                </main>
            </div>
        );
    }
}
