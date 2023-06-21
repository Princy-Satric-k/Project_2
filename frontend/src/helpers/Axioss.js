import axios from "axios";
//import { BASE_API } from "./Env"
// import { AUTH, HEADER } from "./Global"
//import { getLocalStorage } from "./Storage"

const service = axios.create({
  baseURL: "http://localhost:3003",
  mode: "cors",
  headers: {
    //'Content-Type': HEADER.CONTENT_TYPE,
    "Access-Control-Allow-Origin": "*",
  },
  timeout: 60000,
});

service.interceptors.request.use(
  (config) => {
    const jwtToken = localStorage.getItem("auth_token");
    //const jwtToken = getLocalStorage("auth_token")
    if (jwtToken) {
      //config.headers[AUTH.TOKEN_PAYLOAD_KEY] = 'Bearer ' + jwtToken
      config.headers["authorization"] = jwtToken;
    }

    if (!jwtToken && !config.headers["public-request"]) {
      //history.push(AUTH.ENTRY_ROUTE)
    }

    return config;
  },
  (error) => {
    // error goes here
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      //unsetLocalStorage()
      //localStorage.removeItem(AUTH_TOKEN);
      //history.push(ENTRY_ROUTE)

      return (error.response.data.message =
        "Session closed ....you have been logged out!");
    }
    if (error.response.status === 403) {
      return (error.response.data.message = "Authentication Fail");
    }
    if (error.response.status === 404) {
      return (error.response.data.message = "Not Found");
    }
    if (error.response.status === 500) {
      return (error.response.data.message = "Internal Server Error");
    }
    if (error.response.status === 508) {
      return (error.response.data.message = "Time Out");
    }
    return Promise.reject(error);
  }
);

export default service;
