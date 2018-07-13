import React, {Component} from 'react';

import classes from './Services.css';

import {connect} from 'react-redux';
import * as action from '../../store/actions/actions';

import ToolbarStart from '../../components/Layout/ToolbarServices/ToolbarServices';
import Spinner from '../../components/UI/Spinner/Spinner';

class StartPage extends Component {
       
        componentDidMount() {
            this.props.dataFetch();
        }

        onClickHandler(id) {
            this.props.history.replace(this.props.location.pathname + '/edit/' + id)
        }

    render() {
        
        let blocks = <div className={classes.spinner}><Spinner/></div>;

        if (!this.props.loading) {
            blocks = (
                <div className={classes.blocks}>
                {this.props.services.map(el => {
                    if(!el) return null;
                    let inactiveDiv = null;
                    if(el.isActive === 'inactive') {
                        inactiveDiv = <div className={classes.inactive}><div>INACTIVE</div></div>
                    }
                    return (
                        <div onClick={() => this.onClickHandler(el.id)} key={el.id} className={classes.el}> 
                            <div className={classes.TextDiv}>
                                <h3>{el.body.name}</h3>
                                <span>{el.body.subtitle}</span>
                                <span>Max Hours: {el.body.maxHours}</span>
                                <span>Min Hours: {el.body.minHours}</span>
                                <span>Price Per Hour: {el.body.pricePerHour}</span>
                            </div>
                            <div className={classes.ImgDiv}>
                                {inactiveDiv}
                            </div>
                        </div>
                    )
            })}
        </div>
            )
        }

        return (
            <div className={classes.wrapper}>
            <ToolbarStart/>
            {blocks}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dataFetch: () => dispatch(action.fetchData()),
    }
}

const mapStateToProps = state => {
    return {
        services: state.services,
        loading: state.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);