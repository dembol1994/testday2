import React, {Component} from 'react';
import classes from './ToolbarServices.css';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import * as action from '../../../store/actions/actions';

class Toolbar extends Component {
    state = {
        links: [
            {
                id: 'inactive',
                text: 'Inactive'
            },
            {
                id: 'active',
                text: 'Active'
            },
            {
                id: 'all',
                text: 'All'
            }
        ]
    }

    onClickHandler = (id) => {
        console.log(id)
        this.props.onClick(id);
        this.props.fetchData(id)
    };

    render() {
        console.log(this.props.location)
        return (
        <div className={classes.wrapper}>
            <div className={classes.navLinks}>
                {this.state.links.map(el => {
                   let cssClass = null;
                   el.id === this.props.active ? cssClass = classes.activeNavLink : cssClass = classes.navLinks;
                    return <div 
                            onClick={() => this.onClickHandler(el.id)} 
                            key={el.id} 
                            className={cssClass}>{el.text}</div>
                })}
                </div>
            <div className={classes.newPage}><Link to='/services/addnew'>ADD NEW SERVICE</Link></div>
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        active: state.activeButton
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (id) => dispatch(action.changeActive(id)),
        fetchData: (id) => dispatch(action.fetchData(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);