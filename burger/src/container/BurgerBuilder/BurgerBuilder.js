import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger' 
import BuildControls from '../../components/Burger/BuildControls/BuildControls' 

const INGREDIENT_PRIZE = {
    salad : 0.5,
    meat : 1,
    cheese : 1.4,
    bacon : 0.7
}
class BurgerBuilder extends Component{
    state = {
        ing : {
            salad : 0,
            meat : 0,
            cheese : 0,
            bacon : 1
        },
        totalCost : 4
    }

    addIngredientsEventHandler = (type) =>{
        const oldCount = this.state.ing[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ing
        }

        updatedIngredients[type] = updatedCount;

        const totalAddition = INGREDIENT_PRIZE[type];
        const oldTotal = this.state.totalCost;
        const newPrize = totalAddition + oldTotal;
        this.setState({
            totalCost : newPrize,
            ing : updatedIngredients
        })
    }
    
    removeIngredientsEventHandler = (type) =>{
        const oldCount = this.state.ing[type];
        const updatedCount = (oldCount === 0) ? 0 : oldCount - 1;
        const updatedIngredients = {
            ...this.state.ing
        }

        updatedIngredients[type] = updatedCount;

        const totalAddition = INGREDIENT_PRIZE[type];
        const oldTotal = this.state.totalCost;
        const newPrize = (oldCount === 0) 
        ? oldTotal 
        : oldTotal- totalAddition;
        this.setState({
            totalCost : newPrize,
            ing : updatedIngredients
        })
    }

    render(){
        const disabledInfo = {
            ...this.state.ing
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        return (
            <Aux>
                <Burger ing={this.state.ing} />
                <BuildControls 
                addIngredients={this.addIngredientsEventHandler}
                removeIngredients={this.removeIngredientsEventHandler}
                disabledInfo = {disabledInfo}
                cost = {this.state.totalCost}
                orderBtnInfo = {(this.state.totalCost > 4) ? true : false}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;