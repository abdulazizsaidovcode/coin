import axios from "axios";
import { toast } from "react-toastify";

export const url = "http://139.59.14.48:8090/";
// export const url = "http://192.168.149.27/";

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
        .then((res) => { setTestByCategory(res.data.body) })
        .catch((err) => console.log(err));
}

export function getTestCategory(setTestCategory) {
    axios.get(url + "test/student/category/block", config)
        .then((res) => {
            setTestCategory(res.data.body);
            console.log(res.data.body);
        })

        .catch((err) => console.log(err));
}

export function sendTestCode(text, testId, setResponse, setLoading, setError, time, secound) {
    setLoading(true)
    axios.post(url + "test/performance/" + testId + "?minute=" + `${time}.${secound}`, { text }, config)
        .then((res) => {
            setResponse(res.data);
            setLoading(false);
            setError(2);
        })
        .catch((err) => {
            setResponse(err.response.data.body);
            setLoading(false);
            setError(3);
        });
}

export function getOneTest(testId, setTest) {
    console.log(testId);
    axios.get(url + "test/one/" + testId, config)
        .then((res) => {
            setTest(res.data.body);
        })
        .catch((err) => console.log(err));
}


//              User
export function getStudentStatistics(setStudentStatistics) {
    axios.get(url + "user/student/statistics", config)
        .then((res) => setStudentStatistics(res.data.body))
        .catch((err) => console.log(err));
}

export function getTeacher(setTeacher) {
    axios.get(url + "user/teacher", config)
        .then((res) => setTeacher(res.data.body))
        .catch((err) => console.log(err));
}


//              Category
export function getCategory(setCategory) {
    axios.get(url + "category/father/category?page=0&size=100", config)
        .then((res) => setCategory(res.data.body.object))
        .catch((err) => console.log(err));
}

//                 Group
export function getGroup(setGroup) {
    axios.get(url + "group", config)
        .then(res => {
            // Backend tuzilishiga qarab, ma'lumotlar yo'li o'zgartirilishi kerak
            if (res.data && res.data.body && res.data.body.object) setGroup(res.data.body.object);
            else toast.error("Groups not found!");
        })
        .catch(err => {
            console.error("Error retrieving data 😭", err);
            toast.error("Error retrieving data!");
        });
}

export function addGroup(closeModal, data) {
    axios.post(url + "group/save", data, config).then(() => {
        toast.success("Guruh muvoffaqiyatli qo'shildi!");
        closeModal();
    }).catch(error => {
        console.error("Guruh qo'shilmadi 😭", error);
        toast.error("Ma'lumotlarni yuborishda xatolik!");
    });
}

export function editGroup(closeModal, data, id, setGroup) {
    axios.put(`${url}group/update/${id}`, data, config).then(() => {
        toast.success("Guruh muvoffaqiyatli o'zgartirildi");
        closeModal();
        getGroup(setGroup)
    }).catch(error => {
        if (error.response.status === 404) toast.warning("barcha malumotlar tuldirilmagan!")
        else toast.error("Ma'lumotlarni yuborishda xatolik!");
        console.error("Guruh qo'shilmadi 😭", error);
    });
}

export const setConfig = () => config.headers.Authorization = sessionStorage.getItem("jwtToken");   