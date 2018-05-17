import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';


const SortableItem = SortableElement(({value}) =>
    <li className="Drag-drop">{value}</li>
);

const SortableList = SortableContainer(({items}) => {
    return (
        <ul>
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={index + 1 + ". " + value} />
            ))}
        </ul>
    );
});


export class FormStepThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.tasks
        }
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    };

    render() {
        return (
            <form>
                <fieldset>
                    <legend><span>Stap 3/4</span> Taken rangschikken</legend>
                    <label>Rangschik de huishoudelijke taken</label>
                    <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
                </fieldset>
            </form>
        );
    }
}
