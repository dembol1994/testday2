import * as actionTypes from './actionTypes';
import {instance} from '../../axios/axios';

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

export const postData = (data, history) => {
    return dispatch => {

        dispatch(connectStart());
       
        instance.post('services', data)
        .then(res => {
            dispatch(changeActive('all'));
            dispatch(connectFinish());
            history.replace('/services')
        })
        .catch(err => {
            dispatch(connectFinish());
        })

    }
};

export const putData = (data, history, id, active) => {
    return dispatch => {
        dispatch(connectStart());
    
        instance.put('services?active=' + active +'&id=' + id, data)
        .then(res => {
            dispatch(changeActive('all'));
            dispatch(cleanEditData())
            dispatch(connectFinish());
            history.replace('/services')
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
};

export const fetchData = (type) => {
    return dispatch => {
        dispatch(connectStart());
        let url = 'services';
        if (type && type !== 'all') url = 'services?active=' + type;

        instance.get(url)
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

export const editData = (id) => {
    return dispatch => {
        dispatch(connectStart())

        instance.get('services/edit?id=' + id)
            .then(res => {
                dispatch(editForm(res.data));
                dispatch(connectFinish());
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

export const deleteData = (id, history) => {
    return dispatch => {
        dispatch(connectStart())
        instance.delete('services?id=' + id)
            .then(res => {
                dispatch(connectFinish())
                dispatch(cleanEditData())
                history.replace('/services')
            })
            .catch(err => {
                dispatch(connectFinish())
            })

    }
}