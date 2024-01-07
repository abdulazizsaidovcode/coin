export const url = "http://137.184.13.215/";

export const byId = (id) => document.getElementById(id);

export const config = {
    headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
    }
}

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem("jwtToken");   