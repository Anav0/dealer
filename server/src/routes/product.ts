import { Router } from "express";
import activeServices from "../services/activeServices";
const router = Router();
const productService = activeServices.getProductService();
const categoryService = activeServices.getCategoryService();

router.get("/", async (req, res, next) => {
    try{
        const products = await productService.getAllProducts()
        return res.status(200).json(products)
    }catch(error){
        next(error)
    }
});

router.get("/single/:id", async (req, res, next) => {
    try{
        let productId = req.params.id;
        if(!productId) throw new Error("No product id given as param");
        const product = await productService.getById(productId);
        return res.status(200).json(product)
    }catch(error){
        next(error)
    }
});

router.get("/category/:id", async (req, res, next) => {
    try{
        let categoryId = req.params.id;
        const category = await categoryService.getById(categoryId);
        console.log(category)
        if(!category) throw new Error("No category given as param");
        const products = await productService.getAllProductsForCategory(category);
        return res.status(200).json(products)
    }catch(error){
        next(error)
    }
});

export default router;
