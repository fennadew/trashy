import React from 'react';

export const HeaderMain = (props) =>  {
    return (
        <header className="Header main">
            <h1>{props.title}</h1>
            {props.children}
        </header>
    );
};