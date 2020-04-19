import {IProductService} from "./IProductService";
import {Category} from "../../models/category";
import {Product, ProductModel} from "../../models/product";

export default class MongoProductService implements IProductService{
    async getAllProducts(): Promise<Array<Product>> {
        return ProductModel.find().populate("producent category")
    }

    async getAllProductsForCategory(category: Category): Promise<Array<Product>> {
        const categoryId = category._id;
        return ProductModel.find({category: categoryId}).populate("producent category")
    }

    async getById(id: string): Promise<Product> {
        return ProductModel.findById(id).populate("producent category")
    }

}