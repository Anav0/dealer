import { Router } from "express";
import activeServices from "../services/activeServices";
const router = Router();
const categoryService = activeServices.getCategoryService();

router.get("/", async (req, res, next) => {
    try{
        const categories = await categoryService.getAllCategories()
        return res.status(200).json(categories)
    }catch(error){
        next(error)
    }
});

export default router;
