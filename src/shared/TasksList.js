import React, {Component} from 'react';

let inputUnchecked = (
    <div className={"content-right checkbox"}>
        <input type="checkbox" id="check"/><label htmlFor="check">Checkbox</label>
    </div>
);

let disabledInputChecked = (
    <div className={"content-right checkbox-fake checked"}>
    </div>
);

let disabledInput = (
    <div className={"content-right checkbox-fake"}>
    </div>
);


let people = [
    {
        name: "Fenna",
        img: require("../images/profilesmall1.png"),
        checked: inputUnchecked,
    },
    {
        name: "Tobias",
        img: require("../images/profilesmall2.png"),
        checked: Math.random() <= 0.35 ? disabledInput : disabledInputChecked,
    },
    {
        name: "Yorick",
        img: require("../images/profilesmall3.png"),
        checked: Math.random() <= 0.35 ? disabledInput : disabledInputChecked,
    },
    {
        name: "Neville",
        img: require("../images/profilesmall4.png"),
        checked: Math.random() <= 0.35 ? disabledInput : disabledInputChecked,
    }

];

export class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    render() {
        people = this.shuffle(people);
        return (
            <div>
                <section className="List-container short">
                    <ul>
                        <li>
                            <img src={people[0].img} alt="Profile"/>
                            <div className="content-left">
                                <span>{people[0].name}</span><span>Wc</span>
                            </div>
                            {people[0].checked}
                        </li>
                        <li>
                            <img src={people[1].img} alt="Profile"/>
                            <div className="content-left">
                                <span>{people[1].name}</span><span>Badkamer</span>
                            </div>
                            {people[1].checked}
                        </li>
                        <li>
                            <img src={people[2].img} alt="Profile"/>
                            <div className="content-left">
                                <span>{people[2].name}</span><span>Keuken</span>
                            </div>
                            {people[2].checked}
                        </li>
                        <li>
                            <img src={people[3].img} alt="Profile"/>
                            <div className="content-left">
                                <span>{people[3].name}</span><span>Woonkamer dweilen</span>
                            </div>
                            {people[3].checked}
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}
