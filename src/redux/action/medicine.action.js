import { deleteMedicineAPI, getAllMedicinesAPI, postAllMedicinesAPI, updateMedicineAPI } from "../../common/api/medicine.api"
import { DELETE_MEDICINE, ERROR_MEDICINE, GET_MEDICINES, LOADING_MEDICINE, POST_MEDICINES, UPDATE_MEDICINE } from "../ActionType";

const loadingAllMedicine = () => (dispatch) => {
    dispatch({ type: LOADING_MEDICINE });

}
const errormedicine = (error) => (dispatch) => {
    console.log(errormedicine);
    dispatch({ type: ERROR_MEDICINE , payload : error })
}

export const getMedicines = () => (dispatch) => {
    dispatch(loadingAllMedicine());
    setTimeout(() => {
        getAllMedicinesAPI()
            .then((response) => dispatch({ type: GET_MEDICINES, payload: response.data }))
            .catch((error) => dispatch(errormedicine(error)))
    }, 2000)


}
export const postMedicines = (data) => (dispatch) => {
    postAllMedicinesAPI(data)
        .then((response) => dispatch({ type: POST_MEDICINES, payload: response.data }))
}

export const deleteMedicine = (id) => (dispatch) => {
    deleteMedicineAPI(id)
        .then(dispatch({ type: DELETE_MEDICINE, payload: id }))

};

export const updateMedicine = (data) => (dispatch) => {
    updateMedicineAPI(data)
        .then((response) => dispatch({ type: UPDATE_MEDICINE, payload: response.data }));

}
