import React, {Component} from 'react';

import classes from './StartPage.css';

import {connect} from 'react-redux';
import * as action from '../../store/actions/actions';

import ToolbarStart from '../../components/Layout/ToolbarStartPage/ToolbarStartPage'

class StartPage extends Component {
       
        componentDidMount() {
            this.props.dataFetch();
        }

        onClickHandler(id) {
            this.props.onBlockClick(id, this.props.history);
        }

    render() {
        return (
            <div className={classes.wrapper}>
            <ToolbarStart/>
            <div className={classes.blocks}>
                    {this.props.services.map(el => {
                        if(!el) return null;
                        let inactiveClass;
                        el.isActive === 'inactive' ? inactiveClass = {color: 'red'} : null;
                        return (
                            <div onClick={() => this.onClickHandler(el.id)} key={el.id} className={classes.el}> 
                                <div className={classes.TextDiv}>
                                    <h3 style={inactiveClass}>{el.body.name}</h3>
                                    <span>{el.body.subtitle}</span>
                                    <span>Max Hours: {el.body.maxHours}</span>
                                    <span>Min Hours: {el.body.minHours}</span>
                                    <span>Price Per Hour: {el.body.pricePerHour}</span>
                                </div>
                                <div className={classes.ImgDiv}></div>
                            </div>
                        )
                })}
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dataFetch: () => dispatch(action.fetchData()),
        onBlockClick: (id, history) => dispatch(action.editData(id, history)) 
    }
}

const mapStateToProps = state => {
    return {
        services: state.services,
        loading: state.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);