import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Leaderboard} from "./Leaderboard";
import {Tasks} from "./Tasks";
import {Stats} from "./Stats";
import Ranking from "../images/ranking.svg";
import Statistics from "../images/graph.svg";
import TasksIcon from "../images/tasks-icon.svg";

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    tab: {
        color: '#000',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        width: "36px",
        height: "36px",
        margin: "auto",
        textIndent: "-9999px",
        backgroundColor: "#C2C2C2",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "50%",
        transition: "all ease 300ms",
    },
    ranking: {
        backgroundImage: `url(${Ranking})`,
        width: "44px",
        height: "44px",
    },
    stats: {
        backgroundImage: `url(${Statistics})`,
    },
    tasks: {
        backgroundImage: `url(${TasksIcon})`,
    },
    active: {
        backgroundColor: "#536DFE",

    },
    circle: {
        backgroundColor: "#536DFE",
        marginTop: "7px",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        marginLeft: "16%"
    }
};

export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 1,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="Home">
                    <footer className="sticky-footer">
                        <Tabs
                            onChange={this.handleChange}
                            value={this.state.slideIndex}
                            className="tabs"
                            inkBarStyle={styles.circle}
                            tabItemContainerStyle={{backgroundColor: "transparent"}}
                        >
                            <Tab label="Tasks" value={0} buttonStyle={Object.assign({}, styles.tab, this.state.slideIndex === 0 && styles.active, styles.tasks)}/>
                            <Tab label="Ranking" value={1} buttonStyle={Object.assign({}, styles.tab, this.state.slideIndex === 1 && styles.active, styles.ranking)}/>
                            <Tab label="Statss" value={2} buttonStyle={Object.assign({}, styles.tab, this.state.slideIndex === 2 && styles.active, styles.stats)}/>
                        </Tabs>
                    </footer>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChange}
                    >
                        <Tasks/>
                        <Leaderboard/>
                        <Stats/>
                    </SwipeableViews>
                </div>
            </MuiThemeProvider>
        );
    }
}