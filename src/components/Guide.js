import React, {Component} from 'react';
import {IntroTitle} from '../shared/IntroTitle.js';
import {IntroText} from '../shared/IntroText.js';
import {Icon} from '../shared/Icon.js';
import {IntroNavigation} from '../shared/IntroNavigation.js';

const guidePages = [
    {
        title: "Aanmelden",
        text: "Maak een account aan met je e-mail of via facebook",
        src: require("../images/signup.svg"),
        color: '#85BBDA'
    },
    {
        title: "Groep aanmaken",
        text: "Maak een groep aan voor jou en je huisgenoten of sluit je aan bij een groep",
        src: require("../images/group.svg"),
        color: '#EFC3BC'
    },
    {
        title: "Taken toevoegen",
        text: "Voeg de taken toe die gedaan moeten worden in jouw studentenhuis",
        src: require("../images/tasks.svg"),
        color: '#CAE8BC'
    },
    {
        title: "Taken rangschikken",
        text: "Breng jouw stem uit over welke taken jij het vervelendst vindt",
        src: require("../images/tasks2.svg"),
        color: '#B6D8EC'
    },
    {
        title: "Plannen",
        text: "Bepaal hoevaak de taken gedaan moeten worden",
        src: require("../images/tasks3.svg"),
        color: '#EFC3BC'
    },
    {
        title: "Versla je huisgenoten",
        text: "Trashy houdt bij wie het meest op zijn telefoon zit. Heb jij het meeste op je telefoon gezeten, dan doe jij de vervelenste taak!",
        src: require("../images/trofee.svg"),
        color: '#CAE8BC'
    },
];

export class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guidePage: guidePages[0],
            pageIndicator: 0
        }
    }

    onPressForward(e) {
        const page = this.state.pageIndicator;
        if (page < (guidePages.length - 1)) {
            e.preventDefault();
            this.setState({
                guidePage: guidePages[page + 1],
                pageIndicator: page + 1,
            });
        }
    }

    isActive(index) {
        return this.state.pageIndicator === index;
    }


    render() {
        return (
                <main className="Guide">
                    <Icon src={this.state.guidePage.src} color={this.state.guidePage.color} pageIndicator={this.state.pageIndicator}/>
                    <IntroTitle title={this.state.guidePage.title} indexOf={this.state.pageIndicator}/>
                    <IntroText text={this.state.guidePage.text} key={this.state.pageIndicator}/>
                    <IntroNavigation onClickForward={(e) => this.onPressForward(e)}
                                     isActive={this.state.pageIndicator}/>
                </main>
        );
    }
}


