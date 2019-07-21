import React from 'react';
import Classes from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={Classes.BuildControl}>
            <div className={Classes.Label}>{props.label}</div>
            <button className={Classes.More} onClick={props.added}>More</button>
            <button className={Classes.Less} disabled={props.disabled} onClick={props.removed}>Less</button>
        </div>
    );
};

export default buildControl;