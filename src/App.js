import React from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import {Start} from './components/Start.js';
import {Guide} from './components/Guide.js';
import {Signup} from './components/Signup.js';
import {Signin} from './components/Signin.js';
import {SignupSteps} from "./components/SignupSteps";
import { InviteFriends } from "./components/InviteFriends";
import { Home } from "./components/Home";
import {Settings} from './components/Settings';
import {Profile} from './components/Profile';

import {TransitionGroup} from 'react-transition-group';

import './styles/App.css';

const App = ({location}) => {
        return (
            <TransitionGroup component="div" className="App">
                        <Switch location={location}>
                            <Route exact path="/" component={Start}/>
                            <Route path="/guide" component={Guide}/>
                            <Route path="/signup" component={Signup}/>
                            <Route path="/signin" component={Signin}/>
                            <Route path="/signup-steps" component={SignupSteps}/>
                            <Route path="/invite-friends" component={InviteFriends}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/settings" component={Settings}/>
                            <Route path="/profile" component={Profile}/>
                        </Switch>
            </TransitionGroup>


        );
};

export default withRouter(App);
