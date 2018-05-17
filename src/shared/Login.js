import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueEmail: "",
            valuePassword: ""
        }
    }

    handleEmailChange(e) {
        let inputValue = e.target.value;
        this.setState({valueEmail: inputValue});
    }

    handlePasswordChange(e) {
        let inputValue = e.target.value;
        this.setState({valuePassword: inputValue});
    }

    render() {
        return (
            <section className="Login">
                <form>
                    <fieldset>
                        {this.props.children[0]}
                        <label>Email</label>
                        <div className={"input-container " + (this.state.valueEmail.length > 0 ? "checked" : "")}>
                            <input type="email"
                                   value={this.state.valueEmail} placeholder="Voorbeeld@domein.nl"
                                   onChange={(e) => this.handleEmailChange(e)}/>
                        </div>
                        <label>Wachtwoord</label>
                        <div className={"input-container " + (this.state.valuePassword.length > 0 ? "checked" : "")}>
                            <input type="password"
                                   value={this.state.valuePassword} placeholder="Voer wachtwoord in"
                                   onChange={(e) => this.handlePasswordChange(e)}/>
                        </div>
                        {this.props.children[1]}
                    </fieldset>
                </form>
                <div><span>Of</span></div>
                <Link to={this.props.link} className="Form-button Social-button">{this.props.social}</Link>
            </section>
        );
    }
}