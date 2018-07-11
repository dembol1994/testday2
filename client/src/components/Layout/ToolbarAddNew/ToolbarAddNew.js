import React from 'react';
import classes from './ToolbarAddNew.css'

import {Link} from 'react-router-dom';

const toolbar = (props) => {
    return(
        <div className={classes.wrapper}>
            <div><Link to='/'>&lt; Back to the Services overview</Link></div>
        </div>
    )
};

export default toolbar;