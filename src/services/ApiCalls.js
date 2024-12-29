import axios from "axios";

// Set up the Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:3001/api", // Base API URL
});

// Add a request interceptor to attach the token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Fetch the token from localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Attach token to headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// User registration
export const userRegister = async (data) => {
  try {
    const response = await apiClient.post("/auth/register", data);
    return response;
  } catch (error) {
    return error;
  }
};

// User login
export const login = async (data) => {
  try {
    const response = await apiClient.post("/auth/login", data);

    // Save the token upon successful login
    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
    }

    return response;
  } catch (error) {
    return error;
  }
};

// Fetch all jobs
export const getallJobs = async () => {
  try {
    const response = await apiClient.get("/job/getAllJobs");
    return response;
  } catch (error) {
    return error;
  }
};
export const startApplication = async (data) =>{
  try {
    const response = await apiClient.post("/application/startapplication",data);
    return response;
  } catch (error) {
    return error;
  }
}
export const saveApplication = async (data) =>{
  try {
    const response = await apiClient.post("application/saveapplication",data);
    return response;
  } catch (error) {
    return error;
  }
}

export const updateApplication = async (data) =>{
  try {
    const response = await apiClient.post("application/updateapplicationstatus",data);
    return response;
  } catch (error) {
    return error;
  }
}
export const getAllApplications =async()=>{
  try {
    const response = await apiClient.get("application/getapplication");
    return response;
  } catch (error) {
    return error;
  }
}
