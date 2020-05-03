import axiosInstance from "./axios";

export default class CategoriesApi {
    getCategories() {
        return axiosInstance.get("/categories")
    }
}