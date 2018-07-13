import React from 'react';
import classes from './Service.css';

const service = (props) => {

    let inactiveDiv = null;
    if(props.isActive === 'inactive') {
        inactiveDiv = <div className={classes.inactive}><div>INACTIVE</div></div>
    }

    return(
        <div onClick={() => props.click(props.id)} key={props.id} className={classes.el}> 
        <div className={classes.TextDiv}>
            <h3>{props.name}</h3>
            <span className={classes.subtitle}>{props.subtitle}</span>
            <span className={classes.bookingCount}>Booking Count: 256</span>
        </div>
        <div className={classes.ImgDiv}>
            {inactiveDiv}
        </div>
    </div>
    )
}

export default service;