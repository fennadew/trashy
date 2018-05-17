import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Icon = (props) => {
    return (
            <TransitionGroup component="div" className="Icon" style={{backgroundColor: props.color}}>
                <CSSTransition key={props.pageIndicator} timeout={800} classNames="slide" appear>
                    <img className="Icon-image" src={props.src} alt={props.title}/>
                </CSSTransition>
            </TransitionGroup>
    );
};