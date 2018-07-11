import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import Sidebar from './Sidebar/Sidebar';
import classes from './Layout.css';
import {Route, Switch} from 'react-router-dom';
import StartPage from '../../containers/StartPage/StartPage';
import Form from '../../containers/Form/Form';

const layout = () => {
    return(
        <div>
        <Toolbar/>
        <div className={classes.wrapper}>
        <Sidebar/>
        <div className={classes.Sth}>
            <Switch>
                <Route path='/' exact component={StartPage}/>
                <Route path='/addnew' component={Form}/>
            </Switch>
        </div>
        </div>
        </div>
    )
}

export default layout;