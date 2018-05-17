import React, {Component} from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';

let weeks = ["Elke week", "Elke 2 weken", "Elke 3 weken", "Elke maand"];

export class FormStepFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.tasks,
            value: "",
        }
    }

    handleFrequencyChange(value) {
        this.setState({value});
        this.props.onChangeFrequency(value);
    }

    render() {
        return (
            <form>
                <fieldset>
                    <legend><span>Stap 4/4</span> Wedstrijd periode</legend>
                    <label>Duur</label>
                    <div className="input-container">
                        <span
                            className={"Placeholder " + (this.state.value.length === 0 ? "disabled" : "hidden")}>Selecteer duur wedstrijd</span>
                        <DropdownList className={"Dropdown " + ((this.state.value.length === 0 && this.props.validation) ? "error" : "")}
                                      data={weeks}
                                      value={this.state.value}
                                      onChange={(value) => this.handleFrequencyChange(value)}
                        />
                    </div>
                </fieldset>
            </form>
        );
    }
}