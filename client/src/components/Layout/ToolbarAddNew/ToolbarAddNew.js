import React, {Component} from 'react';
import classes from './ToolbarAddNew.css';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as action from '../../../store/actions/actions';

class Toolbar extends Component {
   
    onClickHandler = () => {
        //klikniecie w powrot do service overview spowoduje wyczyszczenie danych z editForm 
        this.props.onClick();
        this.props.history.replace('/')
    }
    
    render() {
        return (<div 
            className={classes.wrapper}
            onClick={this.onClickHandler}>&lt; Back to the Services overview</div>        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(action.cleanEditData())
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Toolbar));