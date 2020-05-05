import axiosInstance from "./axios";
import {Category} from "common/models/category";

export default class CategoriesApi {
    getCategories() {
        return axiosInstance.get<Category[]>("/categories")
    }
}