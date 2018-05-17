import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const circlesTotal = [1, 2, 3, 4];

export class SignupNavigation extends Component {
    isActive(index) {
        return index === this.props.isActive;
    }

    render() {
        var name = this.props.groupName;
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
                <Link to="#" onClick={this.props.onClickBackward} className={"Nav-button back " + (this.props.isActive === 0 ? "hidden" : "")}>Terug</Link>
                <div className="Circle-container">
                    {circles}
                </div>
                <Link to={{ pathname: "/invite-friends", state: {name} }} onClick={this.props.onClickForward} className="Nav-button next">Verder</Link>
            </footer>
        );
    }
}