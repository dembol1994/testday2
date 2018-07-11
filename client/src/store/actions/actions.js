import * as actionTypes from './actionTypes';

export const changeActive = (id) => {
    return {
        type: actionTypes.CHANGE_ACTIV_BUTTON,
        id: id
    }
};