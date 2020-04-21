import axiosInstance from "./axios";

export default {
    getProductsForCategory: (categoryId: string) => axiosInstance.get(`/products/category/${categoryId}`),
    getProductsForProducer: (producerId: string) => axiosInstance.get(`/products/producer/${producerId}`),
    getProducts: () => axiosInstance.get(`/products`),
}