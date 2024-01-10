import { DELETE_MEDICINE, ERROR_MEDICINE, GET_MEDICINES, LOADING_MEDICINE, POST_MEDICINES, UPDATE_MEDICINE } from "../ActionType"


const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}

export const medicinesReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case LOADING_MEDICINE:
            return {
                isLoading: true,
                medicines: [],
                error: null

            }
        case ERROR_MEDICINE:
            return{
                isLoading:false,
                medicines : [],
                error : action.payload
            }
        case GET_MEDICINES:
            return {
                isLoading : false,
                medicines: action.payload,
                error:null
            }
        case POST_MEDICINES:
            return {
                ...state,
                medicines: state.medicines.concat(action.payload)
            }
        case DELETE_MEDICINE:
            return {
                ...state,
                medicines: state.medicines.filter((v) => v.id !== action.payload)
            };
        case UPDATE_MEDICINE:
            return {
                ...state,
                medicines: state.medicines.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }

                })
            }
        default:
            return state
    }
}