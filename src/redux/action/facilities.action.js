import { deleteFacilityAPI, getAllFacilitiesAPI, postFacilityAPI, updateFacilityAPI } from "../../common/api/facilities.api";
import { DELETE_FACILITY, GET_FACILITIES, POST_FACILITIES, UPDATE_FACILITY } from "../ActionType";


export const getFacilities = () => (dispatch) => {
    getAllFacilitiesAPI()
        .then((response) => dispatch({ type: GET_FACILITIES, payload: response.data }));
};

export const postFacility = (data) => (dispatch) => {
    postFacilityAPI(data)
        .then((response) => dispatch({ type: POST_FACILITIES, payload: response.data }));
};

export const deleteFacility = (id) => (dispatch) => {
    deleteFacilityAPI(id)
        .then(dispatch({ type: DELETE_FACILITY, payload: id }));
};

export const updateFacility = (data) => (dispatch) => {
    updateFacilityAPI (data)
        .then((response) => dispatch({ type: UPDATE_FACILITY, payload: response.data }));
};
