import React, {Component} from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
let weeks = [ 1, 2, 3, 4 ];

export class FormStepFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.tasks,
            value: "",
            weeks: "weken"
        }
    }

    handleFrequencyChange(value) {
        if (value === 1) {
            this.setState({weeks: "week"});
        } else {
            this.setState({weeks: "weken"});
        }
        this.setState({value});
    }

    render() {
        return (
            <form>
                <div className="input-container">
                    <span className={"Placeholder " + (this.state.value.length === 0 ? "disabled" : "")}>Om de</span>
                    <span className={"Placeholder left " + (this.state.value.length === 0 ? "disabled" : "")}>{this.state.weeks}</span>
                    <DropdownList className="Dropdown middle"
                                  data={weeks}
                                  value={this.state.value}
                                  onChange={(value) => this.handleFrequencyChange( value )}
                    />
                </div>
            </form>
        );
    }
}