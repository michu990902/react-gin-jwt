import { appActionTypes } from './appActionTypes';

const initialState = {
    loading: false,
    data: [],
    error: null
}

const appReducer = (state = initialState, action) => {
    switch (type) {
        case appActionTypes.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading = true,
            }
        case appActionTypes.FETCH_DATA_SUCCESS:
            return {
                loading = false,
                data: action.payload,
                error: null,
            }
        case appActionTypes.FETCH_DATA_FAILURE:
            return {
                loading = false,
                data: [],
                error: action.payload,
            }
        default: return state;
    }
}

export default appReducer;