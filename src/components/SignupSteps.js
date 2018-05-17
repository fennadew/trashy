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
        text: "Maak een groep aan voor jou en je huisgenoten.",
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
        text: "Bepaal hoe vaak de taken gedaan moeten worden. Dit is de wedstrijd periode.",
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
            tasks: [],
            frequency: "",
            valOne: false,
            valTwo: false,
            valThree: false,
        }
    }


    onPressForward(e) {
        const page = this.state.pageIndicator;
        if (page < (guidePages.length - 1)) {
            e.preventDefault();
            if (page === 0) {
                if (this.state.groupname.length > 0 && this.state.amountPeople > 0) {
                    this.setState({
                        guidePage: guidePages[page + 1],
                        pageIndicator: page + 1,
                        valOne: false,
                    });
                } else {
                    this.setState({
                        valOne: true,
                    });
                }
            }
            else if (page === 1) {
                if (this.state.tasks[0].length > 0) {
                    this.setState({
                        guidePage: guidePages[page + 1],
                        pageIndicator: page + 1,
                        valTwo: false,
                    });
                } else {
                    this.setState({
                        valTwo: true,
                    });
                }
            }
            else if (page === 2) {
                this.setState({
                    guidePage: guidePages[page + 1],
                    pageIndicator: page + 1,
                });
            }
        }
        else {
            if (!this.state.frequency.length > 0) {
                e.preventDefault();
                this.setState({
                    valThree: true,
                });
            }
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

    changeFrequency(newFrequency) {
        this.setState({
            frequency: newFrequency
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
                         onChangeAmount={(newAmount) => this.changeAmountPeople(newAmount)}
                         validation={this.state.valOne}
            />,
            <FormStepTwo amount={this.state.amountPeople} onChangeTasks={(newTasks) => this.changeTasks(newTasks)}
                         tasks={this.state.tasks}
                         validation={this.state.valTwo}/>,
            <FormStepThree tasks={this.state.tasks}/>,
            <FormStepFour onChangeFrequency={(newFrequentie) => this.changeFrequency(newFrequentie)}
                          validation={this.state.valThree}/>

        ];
        return (
            <div>
                <Header title="Aanmelden" main={false}/>
                <main className="Signup-container">
                    <section className="inner-signup">
                        {forms[this.state.pageIndicator]}
                        <IntroText text={this.state.guidePage.text}/>
                        <SignupNavigation onClickForward={(e) => this.onPressForward(e)}
                                          onClickBackward={(e) => this.onPressBackward(e)}
                                          isActive={this.state.pageIndicator}
                                          groupName={this.state.groupname}/>
                    </section>
                </main>
            </div>
        );
    }
}
