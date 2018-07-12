import React, {Component} from 'react';
import classes from './Input.css';

class input extends Component {
    onClick = () => {
        this.refs.input.click()
    }

    render() {
            // class hidden attached to input type file
            let classesInput = [classes.wrapper];
            if (!this.props.valid && this.props.touched) {
                classesInput.push(classes.Invalid)
            }
            this.props.hidden ? classesInput.push(classes.hidden) : null;

            // $$$$$$
            let inputField = <input 
                                ref="input" 
                                className={classes.Input}
                                placeholder={this.props.placeholder} 
                                type={this.props.type} 
                                onChange={this.props.change} 
                                value={this.props.value}/>
            if (this.props.dollar) {
               inputField = (
                            <div className={classes.dollarDiv}>
                                <div className={classes.dollarSign}>&#36;</div>
                                <input 
                                    className={classes.dollarInput}
                                    placeholder={this.props.placeholder} 
                                    type={this.props.type} 
                                    onChange={this.props.change} 
                                    value={this.props.value}/>
                            </div>
                )           
            }

        return (
            <div className={classesInput.join(' ')}>
            <label className={classes.Label}>{this.props.label}</label>
            {inputField}
        </div>
        )
    }
}

export default input;