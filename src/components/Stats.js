import React, {Component} from 'react';
import {Header} from "../shared/Header";
import { TabView } from '../shared/Tab'

export class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        };
    }

    render() {
        return (
            <div>
                <Header title="Statistieken" main={true}/>
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
