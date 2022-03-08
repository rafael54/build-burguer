import React from 'react';
import classes from './Burger.module.css';
import BurgerIngeredient from './BurgerIngredient/BurgerIngredient';
//import {withRouter} from 'react-router-dom';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(
        igKey => {
            return[...Array(props.ingredients[igKey])].map(( _ , i) => {
                return <BurgerIngeredient key = {igKey + i} type= {igKey}/>
            });
        }).reduce((arr, el ) => {
            return arr.concat(el)
        }, []);
        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Porfavor ingrese los Ingredientes!</p>;
        }
    return(
        <div className = {classes.Burger}>
            <BurgerIngeredient type = "bread-top" />
            {transformedIngredients}
            <BurgerIngeredient type = "bread-bottom" />
        </div>
    )
};

export default burger;