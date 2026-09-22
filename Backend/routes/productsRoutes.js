


import express from "express";
import {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProductController,
} from "../controllers/productController.js"

const router = express.Router();

router.post('/add',createProduct);

router.get('/',getProduct)

router.get('/:id',getProductById)

router.put('/update/:id',updateProduct);

router.delete('/delete/:id',deleteProductController);

export default router;



