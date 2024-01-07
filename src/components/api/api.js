import axios from "axios";

export const url = "http://192.168.149.27/";

export const getFile = `${url}attachment/getFile/`;

export const byId = (id) => document.getElementById(id);

export const config = {
    headers: {
        Authorization: sessionStorage.getItem("jwtToken"),
    }
}

//              top
export function getTopGroupForAdmin(setTopGroup) {
    axios.get(url + "group/topGroupsForAdmin", config)
        .then((res) => setTopGroup(res.data.body))
        .catch((err) => console.log(err));
}

export function getTopGroupForTeacher(setTopGroup) {
    axios.get(url + "group/topGroupsForTeacher", config)
        .then((res) => setTopGroup(res.data.body))
        .catch((err) => console.log(err));
}

export function getTopTeacher(setTopTeacher) {
    axios.get(url + "user/top/teachers", config)
        .then((res) => setTopTeacher(res.data.body))
        .catch((err) => console.log(err));
}

export function getTopStudent(setTopStudent) {
    axios.get(url + "user/top/student", config)
        .then((res) => setTopStudent(res.data.body))
        .catch((err) => console.log(err));
}

//                  test
export function getTestCategoryId(categoryId, setTestByCategory) {
    axios.get(url + "test/student/category/test?categoryId=" + categoryId, config)
        .then((res) => setTestByCategory(res.data.body))
        .catch((err) => console.log(err));
}

export function getTestCategory(setTestCategory) {
    axios.get(url + "test/student/category/block", config)
        .then((res) => setTestCategory(res.data.body))
        .catch((err) => console.log(err));
}

export function getOneTest(testId, setTest) {
    axios.get(url + "test/one/" + testId, config)
        .then((res) => setTest(res.data.body))
        .catch((err) => console.log(err));
}

export function getStudentStatistics(setStudentStatistics) {
    axios.get(url + "user/student/statistics", config)
        .then((res) => setStudentStatistics(res.data.body))
        .catch((err) => console.log(err));
}

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem("jwtToken");   