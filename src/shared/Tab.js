import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
        padding: 50,
    },
    tab: {
        color: '#000',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 400,
        textTransform: "none"
    }
};

export class TabView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
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
                <div>
                    <Tabs
                        onChange={this.handleChange}
                        value={this.state.slideIndex}
                        className="tabs"
                        inkBarStyle={{backgroundColor: "#44A1D5"}}
                        tabItemContainerStyle={{backgroundColor: "transparent"}}
                    >
                        <Tab label="Dag" value={0} buttonStyle={styles.tab}/>
                        <Tab label="Week" value={1} buttonStyle={styles.tab}/>
                        <Tab label="Maand" value={2} buttonStyle={styles.tab}/>
                        <Tab label="Totaal" value={3} buttonStyle={styles.tab}/>

                    </Tabs>
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChange}
                    >
                        <div className="swipe-view">
                            <img src={require("../images/day.svg")} alt="graph"/>
                        </div>
                        <div className="swipe-view">
                            <img src={require("../images/week-graph.svg")} alt="graph"/>
                        </div>
                        <div className="swipe-view">
                            <img src={require("../images/month.svg")} alt="graph"/>
                        </div>
                        <div className="swipe-view">
                            <img src={require("../images/year.svg")} alt="graph"/>
                        </div>
                    </SwipeableViews>
                </div>
            </MuiThemeProvider>
        );
    }
}