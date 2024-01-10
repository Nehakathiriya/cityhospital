import axios from "axios";
import { BASE_URL } from "../utils/baseURl";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

const sendRequest = (config) => {
    return axiosInstance.request(config)

}

export const getRequest = (path) => {
    return sendRequest({
        method: 'GET',
        url: path
    })
}

export const postRequest = (path, data) => {
    return sendRequest({
        method: 'POST',
        url: path,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
}

export const deleteRequest = (path, id) => {

    return sendRequest({
        method: 'DELETE',
        url: path + id
    })

}

export const putRequest = (path , data) => {
    return sendRequest({
        method: 'PUT',
        url: path + data.id,
        headers: {
            'Content-Type': 'application/json'
        },
        data : data


    })
}