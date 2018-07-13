import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import Sidebar from './Sidebar/Sidebar';
import classes from './Layout.css';
import {Route, Switch} from 'react-router-dom';
import Services from '../../containers/Services/Services';
import Form from '../../containers/Form/Form';
import DefaultPage from '../../components/DefaultPage/DefaultPage';


const layout = () => {
    return(
        <div>
        <Toolbar/>
        <div className={classes.wrapper}>
        <Sidebar/>
        <div className={classes.Sth}>
            <Switch>
                <Route path='/' exact component={DefaultPage}/>
                <Route path='/services/addnew' component={Form}/>
                <Route path='/services/edit/:id' component={Form}/>
                <Route path='/services' component={Services}/>
            </Switch>
        </div>
        </div>
        </div>
    )
}

export default layout;