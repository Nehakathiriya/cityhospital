import { deleteRequest, getRequest, postRequest, putRequest } from "../request"

export const getAllMedicinesAPI = () => {
    return getRequest('medicines');
}

export const postAllMedicinesAPI = (data) => {
    return postRequest('medicines', data)
}

export const deleteMedicineAPI = (id) => {
    return deleteRequest('medicines/',id);
};

export const updateMedicineAPI = (data) => {
    return putRequest('medicines/' , data)
}