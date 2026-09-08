import product from "../models/product.js";

export const createProduct = async (req,res) => {
    try{
        const product = await product.create(res,body);
        res.json({
            message:"product Create successfully",
            product,
        });
    }
    catch(error)
    {
        res.status(500).json({message:'server Error ',error});
    }
};

//get all products
export const getProduct = async (req,res) => {
    try{

    }
    catch(error)
    {
        res.status(500).json({message:"server error",error});
    }
};

//update product
export const updateProduct = async (req,res)=>{
    try{
        const update = await product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
    res.json({message:"product update sucessfully",
        updated,
    });
}
    catch(error)
    {
        res.status(500).json({message:"server Error"})
    }
}


//delete product    
export const deleteProduct = async (req,res) => {
    try{
        await product.findByIdAndDelete(req.params.id);
        res.json({message :"product delete successfully"});
    }
    catch(error){
        res.status(500).json({message:"server error",error});
    }
}