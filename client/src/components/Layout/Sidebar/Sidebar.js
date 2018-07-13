import React from 'react';
import classes from './Sidebar.css';
import {Link} from 'react-router-dom';

const sidebar = (props) => {

    let onClickHandler = (e) => {
        console.log(e.target.innerHTML);
    };

    const arr = ['Bookings', 'Specialist', 'Users', 'Locations', 'Services']
    return (
            <div className={classes.wrapper}>
                <nav>
                    {arr.map(el => {
                        return <div key={el}  className={classes.NavLink}><Link onClick={onClickHandler} to='/'>{el}</Link></div>
                    })}
                </nav>
            </div>
    )
};

export default sidebar ;