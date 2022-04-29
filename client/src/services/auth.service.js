import axios from "axios";

const apiURL = "http://localhost:3000/api/auth/"; //3000?8080??

const register = (email, password) => {
    return axios.post(apiURL + "register", {
        email,
        password
    });
};

const login = (email, password) => {
    return axios.post(apiURL + "register", {
        email,
        password
    }).then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
    register,
    login,
    logout,
    getCurrentUser
};

export default AuthService;