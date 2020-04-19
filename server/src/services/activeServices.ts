import {ICategoryService,} from "./CategoryService/ICategoryService";
import MongoCategoryService from "./CategoryService/MongoCategoryService";
import {IDbConnection, MongoDbConnection} from "./dbConnection";
import {IProductService} from "./ProductService/IProductService";
import MongoProductService from "./ProductService/MongoProductService";

class ActiveServices {
    private readonly categoryService: ICategoryService;
    private readonly productService: IProductService;
    private readonly dbService: IDbConnection;

    constructor() {
        this.categoryService = new MongoCategoryService()
        this.productService = new MongoProductService()
        this.dbService = new MongoDbConnection()
    }

    public getCategoryService(): ICategoryService {
      return this.categoryService;
    }

    public getProductService(): IProductService {
        return this.productService;
    }

    public getDbConnectionService(): IDbConnection {
        return this.dbService;
    }
}

const instance = new ActiveServices();

export default instance;
