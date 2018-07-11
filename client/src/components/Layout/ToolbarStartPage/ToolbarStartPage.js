import React from 'react';
import classes from './ToolbarStartPage.css';
import {Link, NavLink,} from 'react-router-dom'

const toolbar = (props) => {

    let arrOfLinks = [
        {
            to: '/?page=active',
            activ: 'false',
            text: 'Active'
        },
        {
            to: '/?page=inactive',
            activ: 'false',
            text: 'Inactive'
        },
        {
            to: '/?page=all',
            activ: 'true',
            text: 'All'
        },

    ]

    return (
        <div className={classes.wrapper}>
            <div className={classes.navLinks}>
                <div><NavLink activeClassName={classes.activeNavLink} to='/?page=active'>Active</NavLink></div>
                <div><NavLink activeClassName={classes.activeNavLink} to='/?page=inactiv'>Inactiv</NavLink></div>
                <div><NavLink activeClassName={classes.activeNavLink} to='/?page=all'>All</NavLink></div>
            </div>
            <div className={classes.newPage}><Link to='/addnew'>ADD NEW SERVICE</Link></div>
        </div>
    )
}

export default toolbar;