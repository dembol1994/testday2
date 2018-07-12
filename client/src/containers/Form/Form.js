import React, {Component} from 'react';
import classes from './Form.css';

import validator from 'validator';
import {connect} from 'react-redux'

import ToolbarForm from '../../components/Layout/ToolbarForm/ToolbarForm';
import Input from '../../components/UI/Input/Input';

import * as actions from '../../store/actions/actions';

class Form extends Component {

    state = {
        formField: {
            name: {
                label: 'NAME',
                placeholder: 'Enter Name',
                type: 'text',
                value: '',
                validation: {
                    isReq: true
                },
                touched: false,
                valid: false
            },
            subtitle: {
                label: 'SUBTITLE',
                placeholder: 'Enter Subtitle',
                type: 'text',
                value: '',
                validation: {
                    isReq: true
                },
                touched: false,
                valid: false
            },
            minHours: {
                label: 'MINIMUM HOURS',
                placeholder: 'Enter Subtitle',
                type: 'number',
                value: '',validation: {
                    isReq: true,
                    minValue: 0,
                    isNum: true
                },
                touched: false,
                valid: false
            },
            maxHours: {
                label: 'MAXIMUM HOURS',
                placeholder: 'Enter Subtitle',
                type: 'number',
                value: '',
                validation: {
                    isReq: true,
                    minValue: 0,
                    isNum: true
                },
                touched: false,
                valid: false
            },
            pricePerHour: {
                label: 'PRICE PER HOUR',
                placeholder: 'Enter Price',
                type: 'number',
                value: '',
                validation: {
                    isReq: true,
                    minValue: 0,
                    isNum: true
                },
                touched: false,
                valid: false
            },
            whiteIcon: {
                label: 'BLUE ICON',
                type: 'file',
                value: 'icon1',
            },
            blueIcon: {
                label: 'BLUE ICON',
                type: 'file',
                value: 'icon2',
            },
            usersImage: {
                type: 'file',
                value: 'icon3',
            }
        },
        isServiceActive: true,
        formIsValid: false 
    }

    onSaveHandler = () => {
        let data = {};
        for(let key in this.state.formField) {
            data[key] = this.state.formField[key].value
        }

        let id;
        this.props.editData ? id = this.props.editData.id : id = null;
        this.props.postData(data, this.props.history, id, this.state.isServiceActive);
    };

    onCancelHandler = () => {
        //set all value in form to empty string
        let newForm = {...this.state.formField}
        for (let key in newForm) {
            newForm[key] = {
                ...newForm[key],
                value: '',
                touched: false,
                valid: false
            }
        }
        this.setState({formField: newForm})
    };

    onValidHandler = (value, rules) => {
        let isValid = true;

        if (rules.hasOwnProperty('isReq')) {
            isValid = !validator.isEmpty(value) && isValid;
        }

        if (rules.hasOwnProperty('minValue')) {
            isValid = value >= rules.minValue && isValid;
        }
        if (rules.hasOwnProperty('isNum')) {
            isValid = validator.isDivisibleBy(value, 1) && isValid;
        }

        return isValid;
    }

    isFormValid = (formObj) => {
        let isValid = true;
        for (let key in formObj) {
            if (formObj[key].hasOwnProperty('valid')) {
                isValid = formObj[key].valid && isValid
            }
        }
        return isValid;
    }

    onChangeHandler = (e, id) => {
        let updState = {...this.state.formField};
        let updForm = {...updState[id]};

        updForm.value = e.target.value;
        updForm.touched = true;
        updForm.valid = this.onValidHandler(e.target.value, this.state.formField[id].validation);

        updState[id] = updForm;

        this.setState({formField: updState, formIsValid: this.isFormValid(updState)})
    };

    onUploadIconHandler = (id) => {
        this.refs[id].onClick();
    }

    componentDidMount() {
        if(this.props.editData) {
            let editForm = {...this.state.formField};
            let {body} = this.props.editData
            for (let key in body) {
                editForm[key] = {
                    ...editForm[key],
                    value: body[key],
                    valid: true
                }
            }
            this.setState({formField: editForm, formIsValid: true, isServiceActive: this.props.editData.isActive == 'active'})
        }
    }

    onChangeCheckbox = () => {
        this.setState({isServiceActive: !this.state.isServiceActive})
    }

    render() {
        // conditionaly change text and add checkbox
        let formTitle = 'Add New Service';
        let checkboxDiv = null;
        if (this.props.editData) {
            formTitle = 'Edit Your Service';
            checkboxDiv = (
                    <div>
                            <input 
                                type="checkbox"
                                checked={this.state.isServiceActive}
                                onChange={this.onChangeCheckbox}/>
                            <span>ACTIVE</span>
                    </div>)
        }
       
        
        return(
            <div className={classes.content}>
                <ToolbarForm/>
                <div className={classes.wrapper}>
                    <div className={classes.topDiv}>
                        <div className={classes.addText}>{formTitle}</div>
                        <div className={classes.requireText}>all fields required</div>
                    </div>
                    <div className={classes.middleDiv}>
                        <div className={classes.formDiv}>
                        <div className={classes.topFormDiv}>
                            <Input
                            touched={this.state.formField.name.touched} 
                            valid={this.state.formField.name.valid}
                            placeholder={this.state.formField.name.placeholder}
                            label={this.state.formField.name.label}
                            type={this.state.formField.name.type}
                            value={this.state.formField.name.value}
                            change={(e) => this.onChangeHandler(e, 'name') }/>
                            <Input
                            touched={this.state.formField.subtitle.touched} 
                            valid={this.state.formField.subtitle.valid} 
                            placeholder={this.state.formField.subtitle.placeholder}
                            label={this.state.formField.subtitle.label}
                            type={this.state.formField.subtitle.type}
                            value={this.state.formField.subtitle.value}
                            change={(e) => this.onChangeHandler(e, 'subtitle') }/>
                        </div>
                        <div className={classes.middleFormDiv}>
                            <div className={classes.leftForm}>
                                <div>WHITE ICON</div>
                                <button className={classes.uploadButton} onClick={() => this.onUploadIconHandler('whiteIconInput')}>UPLOAD ICON</button>
                                <Input
                                    hidden={true}
                                    type={this.state.formField.whiteIcon.type}
                                    ref='whiteIconInput'
                                    change={(e) => this.onChangeHandler(e, 'whiteIcon') 
                                    }/>
                                <Input 
                                    touched={this.state.formField.minHours.touched} 
                                    valid={this.state.formField.minHours.valid}
                                    placeholder={this.state.formField.minHours.placeholder}
                                    label={this.state.formField.minHours.label}
                                    type={this.state.formField.minHours.type}
                                    value={this.state.formField.minHours.value}
                                    change={(e) => this.onChangeHandler(e, 'minHours') }/>
                            </div>
                            <div className={classes.rightForm}>
                                <div>BLUE ICON</div>
                                <Input
                                    hidden={true}
                                    type={this.state.formField.blueIcon.type}
                                    ref='blueIconInput'
                                    change={(e) => this.onChangeHandler(e, 'BlueIcon') 
                                    }/> 
                                <button  className={classes.uploadButton} onClick={() => this.onUploadIconHandler('blueIconInput')}>UPLOAD ICON</button>
                                <Input
                                    touched={this.state.formField.maxHours.touched} 
                                    valid={this.state.formField.maxHours.valid}                         
                                    placeholder={this.state.formField.maxHours.placeholder}
                                    label={this.state.formField.maxHours.label}
                                    type={this.state.formField.maxHours.type}
                                    value={this.state.formField.maxHours.value}
                                    change={(e) => this.onChangeHandler(e, 'maxHours') }/>
                            </div>
                        </div>
                        <div className={classes.leftForm}>
                                <Input 
                                    touched={this.state.formField.pricePerHour.touched} 
                                    valid={this.state.formField.pricePerHour.valid}              
                                    placeholder={this.state.formField.pricePerHour.placeholder}
                                    label={this.state.formField.pricePerHour.label}
                                    type={this.state.formField.pricePerHour.type}
                                    value={this.state.formField.pricePerHour.value}
                                    change={(e) => this.onChangeHandler(e, 'pricePerHour') }/>
                                       
                        </div>
                        </div>
                        <div className={classes.imgDiv}>
                                    <label>IMAGE</label>
                                    <div className={classes.img}></div>
                                    <Input
                                        hidden={true}
                                        type={this.state.formField.usersImage.type}
                                        ref='usersImage'
                                        change={(e) => this.onChangeHandler(e, 'usersImage') 
                                        }/> 
                                    <button   className={classes.uploadButton} onClick={() => this.onUploadIconHandler('usersImage')}>UPLOAD IMAGE</button>
                                    {checkboxDiv}
                        </div>
                    </div>
                    <div className={classes.bottomDiv}>
                        <div>
                            <button onClick={this.onCancelHandler}  className={classes.Cancel}>CANCEL</button>
                            <button onClick={this.onSaveHandler} disabled={!this.state.formIsValid} className={classes.Save}>SAVE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postData: (data, history, id) => dispatch(actions.postData(data, history, id))
    }
}

const mapStateToProps = state => {
    return {
        editData: state.editForm
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);