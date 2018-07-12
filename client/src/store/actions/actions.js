import * as actionTypes from './actionTypes';
import axios from 'axios';

export const changeActive = (id) => {
    return {
        type: actionTypes.CHANGE_ACTIVE_BUTTON,
        id: id
    }
};

const connectStart = () => {
    return {
        type: actionTypes.CONNECT_START
    }
};

const connectFinish = () => {
    return {
        type: actionTypes.CONNECT_FINISH
    }
};

export const postData = (data, history, id, active) => {
    return dispatch => {

        dispatch(connectStart());

        //if id was passed it is add as a query params

        let url = 'http://localhost:5000/services?active=active';
        if (id) url += '?id=' + id;
        axios.post(url, data)
        .then(res => {
            dispatch(changeActive('all'));
            dispatch(connectFinish());
            history.replace('/')
        })
        .catch(err => {
            dispatch(connectFinish());
        })

    }
};

export const addData = (data) => {
    return {
        type: actionTypes.ADD_DATA,
        data: data
    }
};

export const fetchData = (type) => {
    return dispatch => {
        dispatch(connectStart());
        let url = 'http://localhost:5000/services';
        if (type && type !== 'all') url = 'http://localhost:5000/services?active=' + type;

        axios.get(url)
        .then(res => {
            dispatch(connectFinish());
            dispatch(addData(res.data))        
        })
        .catch(err => {
            dispatch(connectFinish())
        })
    }
};

const editForm = (data) => {
    return {
        type: actionTypes.EDIT_FORM,
        data: data
    }
}

export const editData = (id, history) => {
    return dispatch => {
        dispatch(connectStart())

        axios.get('http://localhost:5000/edit?id=' + id)
            .then(res => {
                console.log(res.data)
                dispatch(editForm(res.data));
                dispatch(connectFinish());
                history.replace('/addnew')
            })
            .catch(err => {
                dispatch(connectFinish());
            })
    }
};

export const cleanEditData = () => {
    return {
        type: actionTypes.CLEAN_EDIT_DATA
    }
}