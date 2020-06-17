import React from 'react';

import classes from './NavegationItems.module.css';
import NavegationItem from './NavegationItem/NavegationItem';

const navegationItems = (props) => (
    <ul className={classes.NavegationItems}>
        <NavegationItem link="/" exact>ARMA TU HAMBURGUESA</NavegationItem>
        {props.isAuthenticated ? <NavegationItem link="/orders">PEDIDOS</NavegationItem> : null}
        {!props.isAuthenticated
            ? <NavegationItem link="/auth">REGISTRATE</NavegationItem>
            : <NavegationItem link="/logout">SALIR</NavegationItem>
        }
    </ul>
);

export default navegationItems;