import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;