import React from 'react';
import classes from './Toolbar.css';

import {Link} from 'react-router-dom';

const toolbar = () => {
    return(
        <div className={classes.wrapper}>
            <div className={classes.Logo}>SERVICE 24H</div>
            <div className={classes.InnerDiv}>
                <div className={classes.Admin}>Admin</div>
                <div className={classes.Links}>
                    <Link to='/'>CHANGE PASSWORD</Link> | <Link to='/'>LOGOUT</Link>
                </div>
            </div>
        </div>
    )
}

export default toolbar;