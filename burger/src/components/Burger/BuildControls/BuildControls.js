import React from 'react';
import Classes from './BuildControls.css'
import BurgerControl from './BuildControl/BuildControl';

const contorls = [
    {label : "Salad" , type : "salad"},
    {label : "Meat" , type : "meat"},
    {label : "Cheese" , type : "cheese"},
    {label : "Bacon" , type : "bacon"},
]
const buildControls = (props) => (
    <div className={Classes.BuildControls}>
        <p>Total Cost: {(props.cost).toFixed(2)}</p>
        {contorls.map(ctrl => (
            <BurgerControl 
            key={ctrl.type} 
            label={ctrl.label}
            added ={() => props.addIngredients(ctrl.type)}
            removed = {()=> props.removeIngredients(ctrl.type)}
            disabled = {props.disabledInfo[ctrl.type]} />
        ))}
    </div>
);

export default buildControls;