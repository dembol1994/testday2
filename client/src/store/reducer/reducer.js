import * as actionTypes from '../actions/actionTypes';

const initialState = {
    activeButton: 'all',
    loading: false,
    services: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_ACTIVE_BUTTON: 
        return {
            ...state,
            activeButton: action.id
        }
        case actionTypes.CONNECT_START:
        return {
            ...state,
            loading: true
        }
        case actionTypes.CONNECT_FINISH: 
        return {
            ...state,
            loading: false
        }
        case actionTypes.ADD_DATA:
        return {
            ...state,
            services: action.data
        }
        default: return state
    }
}

export default reducer;