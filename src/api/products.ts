import axiosInstance from "./axios";

export default class ProductsApi {
    getProductsForCategory(categoryId: string) {
        return axiosInstance.get(`/products/category/${categoryId}`)
    }

    getProductsForProducer(producerId: string) {
        return axiosInstance.get(`/products/producer/${producerId}`)
    }

    getProducts() {
        return axiosInstance.get(`/products`)
    }
}