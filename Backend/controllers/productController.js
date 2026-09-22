import Product from "../models/product.js";

export const createProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body);
        res.json({
            message: "product Created successfully",
            product,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'server Error ', error });
    }
};

//get all products
export const getProduct = async (req, res) => {
    try {
        const product = await Product.find();
        // console.log(product);
        res.status(200).json({

            message: "product fetched successfully",
            product,
        });
    }
    catch (error) {
        res.status(500).json({ message: "server error", error });
    }
};

//get single product by id
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({
            message: "product fetched successfully",
            product,
        });
    }
    catch (error) {
        res.status(500).json({ message: "server error", error });
    }
};

//update product
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json({
            message: "product update sucessfully",
            updatedProduct,
        });
    }
    catch (error) {
        res.status(500).json({ message: "server Error" })
    }
}


//delete product    
export const deleteProductController = async (req, res) => {
    // try{
    //     await product.findByIdAndDelete(req.params.id);
    //     res.json({message :"product delete successfully"});
    // }
    // catch(error){
    //     res.status(500).json({message:"server error",error});
    // }

    try {
        const { id } = req.params;
        const deleted = await Product.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }


};