import {Product} from "../../models/product";
import {Category} from "../../models/category";

export interface IProductService{
    getAllProducts(): Promise<Array<Product>>;
    getAllProductsForCategory(category: Category): Promise<Array<Product>>;
    getById(id: string): Promise<Product>;
}