import React, {Component} from 'react';
import {HeaderMain} from "../shared/HeaderMain";
import { TabView } from '../shared/Tab'
import { Link } from 'react-router-dom';

export class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderMain title="Statistieken">
                    <Link to="/home" className="back link">Back</Link>
                </HeaderMain>
                <main>
                    <section className="Profile-section dark-theme side">
                        <img src={this.props.location.state.name} alt="Profile"/>
                        <div>
                            <div className="big">Totaal</div>
                            <div><span className="medium">203</span>h<span className="medium">24</span>m</div>
                            <div>Op {this.props.location.state.gender} telefoon</div>
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
