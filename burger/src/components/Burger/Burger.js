import React from 'react';
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let trasIng = Object.keys(props.ing).map(id=>{
        return [...Array(props.ing[id])].map((_,index) => {
            return <BurgerIngredient key={id+index} type={id} />;
        })
    })
    .reduce((arr,  el ) => {
        return arr.concat(el);
    },[]);
    
    if(trasIng.length === 0){
        trasIng = <p>Please add ingredients!</p>
    }
    return(
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {trasIng}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger;