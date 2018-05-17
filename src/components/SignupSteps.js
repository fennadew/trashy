import React, {Component} from 'react';
import {IntroText} from '../shared/IntroText.js';
import {SignupNavigation} from '../shared/SignupNavigation.js';
import {FormStepOne} from './FormStepOne.js';
import {Header} from "../shared/Header";
import {FormStepTwo} from "./FormStepTwo";
import {FormStepThree} from "./FormStepThree";
import {FormStepFour} from "./FormStepFour";

const guidePages = [
    {
        title: "Groep aanmaken",
        text: "Maak een groep aan voor jou en je huisgenoten en selecteer de apps die niet mee doen.",
    },
    {
        title: "Taken toevoegen",
        text: "Voeg de taken toe die gedaan moeten worden in jouw studentenhuis.",
    },
    {
        title: "Taken rangschikken",
        text: "Breng jouw stem uit over welke taken jij het vervelendst vindt.",
    },
    {
        title: "Frequentie",
        text: "Bepaal hoe vaak de taken gedaan moeten worden.",
    },
];

export class SignupSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guidePage: guidePages[0],
            pageIndicator: 0,
            groupname: "",
            amountPeople: "",
            tasks: []
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

    onPressBackward(e) {
        e.preventDefault();
        const page = this.state.pageIndicator;
        if (page > 0) {
            this.setState({
                guidePage: guidePages[page - 1],
                pageIndicator: page - 1,
            });
        }
    }

    isActive(index) {
        return this.state.pageIndicator === index;
    }

    changeGroupName(newName) {
        this.setState({
            groupname: newName
        });
    }

    changeAmountPeople(newAmount) {
        this.setState({
            amountPeople: newAmount
        });
    }

    changeTasks(newTasks) {
        this.setState({
            tasks: newTasks
        });
    }

    render() {
        const forms = [
            <FormStepOne amount={this.state.amountPeople} groupName={this.state.groupname}
                         onChangeGroup={(newName) => this.changeGroupName(newName)}
                         onChangeAmount={(newAmount) => this.changeAmountPeople(newAmount)}/>,
            <FormStepTwo amount={this.state.amountPeople} onChangeTasks={(newTasks) => this.changeTasks(newTasks)}
                         tasks={this.state.tasks}/>,
            <FormStepThree tasks={this.state.tasks}/>,
            <FormStepFour/>

        ];
        return (
            <div>
                <Header title={this.state.guidePage.title} main={false}/>
                <main className="Signup-container">
                    {forms[this.state.pageIndicator]}
                    <IntroText text={this.state.guidePage.text}/>
                    <SignupNavigation onClickForward={(e) => this.onPressForward(e)}
                                      onClickBackward={(e) => this.onPressBackward(e)}
                                      isActive={this.state.pageIndicator}
                                      groupName={this.state.groupname}/>
                </main>
            </div>
        );
    }
}
