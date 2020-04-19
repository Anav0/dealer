import {ICategoryService} from "./ICategoryService";
import {Category, CategoryModel} from "../../models/category";

export default class MongoCategoryService implements ICategoryService{
    async getAllCategories(): Promise<Array<Category>> {
        const results = await CategoryModel.find().populate('producers');
        return results as Array<Category>;
    }

    async getById(id: string): Promise<Category> {
        return CategoryModel.findById(id).populate('producers');
    }
}