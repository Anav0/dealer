import {Category} from "../../models/category";

export interface ICategoryService{
     getAllCategories(): Promise<Array<Category>>;
     getById(id: string): Promise<Category>;
}
