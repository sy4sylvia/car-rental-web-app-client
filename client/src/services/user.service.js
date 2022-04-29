import axios from "axios";
import AuthHeader from "./auth-header";


const apiURL = "http://localhost:3000/api/test/"; //3000?5000?8080?
const getPublicContent = () => {
    return axios.get(apiURL + "all");
};
const getUserBoard = () => {
    return axios.get(apiURL + "user", { headers: AuthHeader() });
};
const getModeratorBoard = () => {
    return axios.get(apiURL + "mod", { headers: AuthHeader() });
};
const getAdminBoard = () => {
    return axios.get(apiURL + "admin", { headers: AuthHeader() });
};
const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};
export default UserService;