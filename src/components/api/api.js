import axios from "axios";

export const url = "http://137.184.13.215/";

export const byId = (id) => document.getElementById(id);

export const config = {
    headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
    }
}

export function getTopGroup(setTopGroup) {
    axios
        .get(url + "group/topGroupsForAdmin", config)
        .then((res) => setTopGroup(res.data.body))
        .catch((err) => console.log(err));
}

export function getTopTeacher(setTopTeacher) {
    axios
        .get(url + "user/top/teachers", config)
        .then((res) => setTopTeacher(res.data.body))
        .catch((err) => console.log(err));
}

export function getTopStudent(setTopStudent) {
    axios
        .get(url + "user/top/student", config)
        .then((res) => setTopStudent(res.data.body))
        .catch((err) => console.log(err));
}

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem("jwtToken");   