import axiosInstance from "./axios";

export default {
    getCategories: () => axiosInstance.get("/categories"),
}