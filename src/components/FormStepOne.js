import React, {Component} from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import { DropdownList } from 'react-widgets';

let houseMates = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];

 export class FormStepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: this.props.groupName,
            value: this.props.amount
        }
    }

     handleGroupNameChange(e) {
         let inputValue = e.target.value;
         this.props.onChangeGroup(inputValue);
         this.setState({groupName: inputValue});
     }

     handlePeopleAmountChange(value) {
         this.props.onChangeAmount(value);
         this.setState({value});
     }


     render() {
        return (
            <form>
                <fieldset>
                <legend><span>Stap 1/4</span> Groep aanmaken</legend>
                    <label>Groepsnaam</label>
                    <div className={"input-container " + (this.state.groupName.length > 0 ? "checked" : "")}>

                <input type="text"
                       className={(this.state.groupName.length === 0 && this.props.validation) ? "error" : ""}
                       value={this.state.groupName} placeholder="Groepsnaam"
                       onChange={(e) => this.handleGroupNameChange(e)}/>
                </div>
                    <label>Aantal leden</label>
                <div className="input-container">
                    <span className={"Placeholder " + (this.state.value.length === 0 ? "disabled" : "hidden")}>Selecteer aantal leden</span>
                <DropdownList className={"Dropdown " + ((this.state.value.length === 0 && this.props.validation) ? "error" : "")}
                              data={houseMates}
                              value={this.state.value}
                              onChange={(value) => this.handlePeopleAmountChange( value )}
                              />
                </div>
                </fieldset>
            </form>
        );
    }
}
