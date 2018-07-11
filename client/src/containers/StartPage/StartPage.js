import React, {Component} from 'react';

import classes from './StartPage.css';
import axios from 'axios';

import {connect} from 'react-redux';
import * as action from '../../store/actions/actions';

import ToolbarStart from '../../components/Layout/ToolbarStartPage/ToolbarStartPage'

class StartPage extends Component {
        state = {
            blocks: {           
                cleaning: {
                    textAbove: 'Cleaning',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                    count: 21        
                },
                cooking: {
                    textAbove: 'Cooking',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                    count: 25
                },      
                cleaning2: {
                    textAbove: 'Cleaning',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                    count: 27       
                },
                cooking2: {
                    textAbove: 'Cooking',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                    count: 29
                },
            
        }
        }
        componentDidMount() {
            console.log(this.props.loading)
            this.props.dataFetch();
        }

    render() {
       
        return (
            <div className={classes.wrapper}>
            <ToolbarStart/>
            <div className={classes.blocks}>                
                    {this.props.services.map(el => {
                    return <div key={el.id} className={classes.el}> 
                    <div className={classes.TextDiv}>
                        <h3>{el.body.name}</h3>
                        <span>{el.body.subtitle}</span>
                        <span>Max Hours: {el.body.maxHours}</span>
                        <span>Min Hours: {el.body.minHours}</span>
                        <span>Price Per Hour: {el.body.pricePerHour}</span>
                    </div>
                    <div className={classes.ImgDiv}></div>
                    </div>
                })}
            </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dataFetch: () => dispatch(action.fetchData())
    }
}

const mapStateToProps = state => {
    return {
        services: state.services,
        loading: state.loading
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);