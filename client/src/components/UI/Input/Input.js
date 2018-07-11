import React, {Component} from 'react';
import classes from './Input.css';

class input extends Component {
    onClick = () => {
        this.refs.input.click()
    }

    render() {
            let classesInput = [classes.Input];
            if (!this.props.valid && this.props.touched) {
                classesInput.push(classes.Invalid)
            }
            this.props.hidden ? classesInput.push(classes.hidden) : null;
        return (
            <div className={classesInput.join(' ')}>
            <label className={classes.Label}>{this.props.label}</label>
            <input ref="input" placeholder={this.props.placeholder} type={this.props.type} onChange={this.props.change} value={this.props.value}/>
        </div>
        )
    }
}

export default input;