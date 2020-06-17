import React, { Component } from 'react';

import Aux from '../../../hoc/Auxs/Auxs';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3>Tu Pedido</h3>
                <p>Una Hamburguesa con los siguentes Ingredientes:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continuar?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCELAR</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUAR</Button>
            </Aux>
        );
    }
}

export default OrderSummary;