import * as actionTypes from '../actions/actionTypes';

const initialState = {
    activeButton: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ACTIV_BUTTON: 
        return {
            ...state,
            activeButton: action.id
        }
        default: return state
    }
}

export default reducer;