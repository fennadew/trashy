import React, {Component} from 'react';

export class FormStepTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: this.props.amount,
            tasks: this.props.tasks
        }
    }


    componentWillMount() {
        let tasks = this.state.tasks;
        let amount = parseInt(this.state.amount, 10);
        if (tasks.length === 0 || (!(tasks.length === amount))) {
            for (let i = 0; i < this.state.amount; i++) {
                tasks[i] = "";
            }
            this.setState({
                tasks
            });
        }
    }

    handleTasksChange(e, i ) {
        let value = e.target.value;
        let newArray = this.state.tasks;
        newArray[i] = value;
        this.setState({
            tasks: newArray
        });

        this.props.onChangeTasks(this.state.tasks);
    }


    render() {
        let tasks = this.state.tasks;
        const amountPeople = tasks.map((el, i) => {
            return <div key={"input" + i} className={"input-container " + ( el.length > 0 ? "checked" : "")}>
                <span className={"Placeholder "+ (el.length === 0 ? "disabled" : "hidden")}>Taak {i + 1}</span>
                <input type="text"
                       className={"Number-input "+ ((i === 0 && tasks[0].length === 0 && this.props.validation) ? "error" : "")}
                       value = {el}
                       onChange={(el) => this.handleTasksChange(el, i)}/>
            </div>
        });
        return (
            <form>
                <fieldset>
                    <legend><span>Stap 2/4</span> Taken toevoegen</legend>
                    <label>Huishoudelijke taken</label>
                    {amountPeople}
                </fieldset>
            </form>
        );
    }
}
