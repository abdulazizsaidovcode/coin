export const url = "http://192.168.100.120/";

export const byId = (id) => document.getElementById(id);

export const config = {
    headers: {
        Authentication: sessionStorage.getItem("jwtToken"),
    }
}
