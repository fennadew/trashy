import React, {Component} from 'react';
import {HeaderMain} from "../shared/HeaderMain";
import {TasksList} from "../shared/TasksList";
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';

const dates = ['48', '49', '50', '51', '52', '01', '02', '03'];
const length = dates.length - 1;

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
        lineHeight: "30px",
        borderRadius: "50%",
        transition: "all ease 300ms",
    },
    active: {
        color: "#FFF",
        backgroundColor: "#44A1D5"
    },
    today: {
        border: "1px solid #44A1D5"
    },
    circle: {
        display: "none"
    }
};

export class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex: length
        }
    }


    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };


    render() {
        const weekDay = dates[this.state.linkActive];
        const currentdates = dates.map((el, i) => {
            return <Tab label={el} value={i} key={i}
                        buttonStyle={Object.assign({}, styles.tab, this.state.slideIndex === i && styles.active, styles.tasks, length === i && styles.today)}/>
        });

        return (
            <MuiThemeProvider>
                <div>
                    <HeaderMain title="Taken overzicht">
                        <Link to="/settings" className="settings link">Settings</Link>
                    </HeaderMain>
                    <main>
                        <section className="Calender-section dark-theme">
                            <h2>Week {weekDay}</h2>
                            <nav>
                                <Tabs
                                    onChange={this.handleChange}
                                    value={this.state.slideIndex}
                                    className="tabs"
                                    inkBarStyle={styles.circle}
                                    tabItemContainerStyle={{
                                        backgroundColor: "transparent", display: "flex",
                                        justifyContent: "space-between"
                                    }}>
                                    {currentdates}
                                </Tabs>
                            </nav>
                        </section>
                        <section>
                            <SwipeableViews
                                index={this.state.slideIndex}
                                onChangeIndex={this.handleChange}
                            >
                                <TasksList/>
                                <TasksList/>
                                <TasksList/>
                                <TasksList/>
                                <TasksList/>
                                <TasksList/>
                                <TasksList/>
                                <TasksList/>
                                <TasksList/>
                            </SwipeableViews>
                        </section>
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}
