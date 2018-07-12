import React, {Component} from 'react';
import classes from './ToolbarForm.css';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as action from '../../../store/actions/actions';

class Toolbar extends Component {
   
    onClickHandler = () => {
        //cleaning data in editForm
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