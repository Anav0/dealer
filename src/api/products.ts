import axiosInstance from "./axios";
import {Product} from "common/models/product";

export default class ProductsApi {
    getProductsForCategory(categoryId: string) {
        return axiosInstance.get<Product[]>(`/products/category/${categoryId}`)
    }

    getProductsForProducer(producerId: string) {
        return axiosInstance.get<Product[]>(`/products/producer/${producerId}`)
    }

    getProducts() {
        return axiosInstance.get<Product[]>(`/products`)
    }
}