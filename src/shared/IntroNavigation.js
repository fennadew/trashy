import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const circlesTotal = [1, 2, 3, 4, 5, 6];

export class IntroNavigation extends Component {
    isActive(index) {
       return index === this.props.isActive;
    }

    render() {
        let circles = circlesTotal.map( (el, i) => {
            let active = (i) => this.isActive(i);
            return <div
                key={ i }
                className={ active(i) ? 'Circle-active': '' }
                >
                </div>

        });
        return (
            <footer className="Intro-navigation">
                <Link to="/signup">Skip</Link>
                <div className="Circle-container">
                    {circles}
                </div>
                <Link to="/signup" onClick={this.props.onClickForward} className="Nav-button next">Verder</Link>
            </footer>
        );
    }
}