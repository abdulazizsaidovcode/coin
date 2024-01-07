import axios from "axios";

export const url = "http://192.168.149.27/";

export const getFile = "http://137.184.13.215/attachment/getFile/";

export const byId = (id) => document.getElementById(id);

export const config = {
    headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
    }
}
    
export function getTopGroupForAdmin(setTopGroup) {
    axios
        .get(url + "group/topGroupsForAdmin", config)
        .then((res) => setTopGroup(res.data.body))
        .catch((err) => console.log(err));
}

export function getTopGroupForTeacher(setTopGroup) {
    axios
        .get(url + "group/topGroupsForTeacher", config)
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

export function getTopStudentForTeacher() {

}

export function getStudentStatistics(setStudentStatistics) {
    axios
        .get(url + "user/student/statistics", config)
        .then((res) => setStudentStatistics(res.data.body))
        .catch((err) => console.log(err));
}

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem("jwtToken");   