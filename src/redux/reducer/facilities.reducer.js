import { DELETE_FACILITY, GET_FACILITIES, POST_FACILITIES, UPDATE_FACILITY } from "../ActionType";

const initialState = {
    isLoading: false,
    facilities: [],
    error: null
};

export const facilitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FACILITIES:
            return {
                ...state,
                facilities: action.payload
            };
        case POST_FACILITIES:
            return {
                ...state,
                facilities: state.facilities.concat(action.payload)
            };
        case DELETE_FACILITY:
            return {
                ...state,
                facilities: state.facilities.filter((v) => v.id !== action.payload)
            };
        case UPDATE_FACILITY:
            return {
                ...state,
                facilities: state.facilities.map((v) => (v.id === action.payload.id ? action.payload : v))
            };
        default:
            return state;
    }
};
