import React from 'react';
import {Header} from "../shared/Header";
import {Link} from 'react-router-dom';

export const Settings = (props) => {
    return (
        <div className={"Settings" + (props.open ? " open" : "")}>
            <Header title="Instellingen" main={true}>
                <Link to="#" onClick={props.onBackPress} className="back link">Back</Link>
            </Header>
            <div className="dark-theme"></div>
            <section className="Setting-container">
                <ul>
                    <li>Mijn account</li>
                    <li>Meldingen</li>
                    <li>Huishoudelijke taken</li>
                    <li>Huisgenoten</li>
                    <li>Beheerder wijzigen</li>
                </ul>
            </section>
        </div>
    );
};