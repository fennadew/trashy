import React, {Component} from 'react';


export class IntroTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:
                this.props.title

        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({title:nextProps.title});
    }
    render() {
        return (
            <div>
                <h1 className="Intro-title">{this.state.title}</h1>
            </div>
        );
    }
}