import axios from "axios"; //to make HTTP requests
const apiURL = "http://localhost:8080/api/auth/"; //backend listens on port 8080

const register = (email, password) => {
    return axios.post(apiURL + "register", {
        email,
        password
    });
};

const login = (email, password) => {
    return axios.post(apiURL + "login", {
        email,
        password
    }).then((response) => {
        if (response.data.accessToken) {
            //store or get JWT
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
    getCurrentUser //get stored user information (including JWT)
};

export default AuthService;