import CategoriesApi from "api/categories";
import ProductsApi from "api/products";
import PaymentApi from "api/payment";

/* WZORZEC FASADA */
//TODO: check if static is oke. Concurrency
export default abstract class Api {
    static categories: CategoriesApi = new CategoriesApi()
    static products: ProductsApi = new ProductsApi()
    static payment: PaymentApi = new PaymentApi()
}