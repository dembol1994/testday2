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
}

const connectFinish = () => {
    return {
        type: actionTypes.CONNECT_FINISH
    }
}

export const postData = (data, history) => {
    return dispatch => {
        dispatch(connectStart());

        axios.post('http://localhost:5000/services', data )
        .then(res => {
            dispatch(changeActive('all'));
            dispatch(connectFinish());
            history.replace('/')
        })
        .catch(err => {
            dispatch(connectFinish());
        })

    }
}

export const addData = (data) => {
    return {
        type: actionTypes.ADD_DATA,
        data: data
    }
}

export const fetchData = (type) => {
    return dispatch => {
        dispatch(connectStart());
        let url = 'http://localhost:5000/services';
        if (type && type !== 'all') url = 'http://localhost:5000/services?active=' + type;
        console.log(url);

        axios.get(url)
        .then(res => {
            console.log(res.data)
            dispatch(connectFinish());
            dispatch(addData(res.data))        
        })
        .catch(err => {
            dispatch(connectFinish())
        })
    }
}