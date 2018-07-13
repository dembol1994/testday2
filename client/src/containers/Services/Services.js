import React, {Component} from 'react';

import classes from './Services.css';

import {connect} from 'react-redux';
import * as action from '../../store/actions/actions';

import ToolbarStart from '../../components/Layout/ToolbarServices/ToolbarServices';
import Spinner from '../../components/UI/Spinner/Spinner';
import Service from '../../components/Service/Service';

class StartPage extends Component {
       
        componentDidMount() {
            this.props.dataFetch();
        }

        onClickHandler(id) {
            console.log(this.props)
            this.props.history.replace(this.props.location.pathname + '/edit/' + id)
        }

    render() {
        
        let blocks = <div className={classes.spinner}><Spinner/></div>;

        if (!this.props.loading) {
            blocks = (
                <div className={classes.blocks}>
                {this.props.services.map(el => {
                    if(!el) return null;
                    return <Service
                                id={el.id}
                                key={el.id}
                                subtitle={el.body.subtitle}
                                name={el.body.name}
                                click={(id) => this.onClickHandler(id)}
                                isActive={el.isActive}/>
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