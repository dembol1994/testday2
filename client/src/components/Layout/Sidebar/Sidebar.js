import React from 'react';
import classes from './Sidebar.css';
import {NavLink} from 'react-router-dom';

const sidebar = (props) => {

    const arr = [
        {
            text:'Bookings',
            to: '/'
        }, 
        {
            text: 'Specialist',
            to: '/'
        }, 
        {
            text: 'Users',
            to: '/'
        }, 
        {
            text: 'Locations',
            to: '/'
        }, 
        {
            text: 'Services',
            to: '/services'
        }]
    return (
            <div className={classes.wrapper}>
                <nav>
                    {arr.map(el => {
                        return <div key={el.text} className={classes.NavLink}><NavLink exact activeStyle={{color: 'white'}} to={el.to}>{el.text}</NavLink></div>
                    })}
                </nav>
            </div>
    )
};

export default sidebar ;