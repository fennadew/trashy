import React, {Component} from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import { DropdownList, Multiselect } from 'react-widgets';

let houseMates = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
let social =  ["Twitter", "Facebook", "Whatsapp", "Bellen", "Email", "Slack", "Safari", "9292OV", "ING App"];

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
                <div className={"input-container " + (this.state.groupName.length > 0 ? "checked" : "")}>
                <input type="text"
                       value={this.state.groupName} placeholder="Groepsnaam"
                       onChange={(e) => this.handleGroupNameChange(e)}/>
                </div>
                <div className="input-container">
                    <span className={"Placeholder " + (this.state.value.length === 0 ? "disabled" : "")}>Aantal leden</span>
                <DropdownList className="Dropdown"
                              data={houseMates}
                              value={this.state.value}
                              onChange={(value) => this.handlePeopleAmountChange( value )}
                              />
                </div>
                <div className="input-container">
                <Multiselect
                    className="Dropdown multi"
                    data={social}
                    textField='name'
                    caseSensitive={false}
                    minLength={3}
                    filter='contains'/>
                    <span className={"Placeholder disabled"}>Apps Excluden</span>
                </div>
            </form>
        );
    }
}
