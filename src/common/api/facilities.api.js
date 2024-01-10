import { deleteRequest, getRequest, postRequest, putRequest } from "../request";

export const getAllFacilitiesAPI = () => {
    return getRequest('facilities');  
}

export const postFacilityAPI = (data) => {
    return postRequest('facilities', data);  
}

export const deleteFacilityAPI = (id) => {
    return deleteRequest('facilities/', id);  
};

export const updateFacilityAPI = (data) => {
    return putRequest('facilities/', data);  
}