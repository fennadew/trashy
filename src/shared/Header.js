import React from 'react';


export const Header = (props) =>  {
        return (
            <header className={"Header " + (props.main ? "main" : "")}>
                {props.children}
                <h1>{props.title}</h1>
            </header>
        );
};