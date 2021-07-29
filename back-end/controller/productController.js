const Product = require('../model/productModel')

module.exports = {
    //addProduct
    
    addProduct:async(req,res)=>{

        const name = req.body.name
        const price = req.body.price
        const reference = req.body.reference

        try{
            produit = new Product ({
                name,
                price,
                reference
            })
            await produit.save()
            res.json(produit)

        }catch(error){
        console.error(error.message)
    }
},
//getProduct
getProduct:async(req,res)=>{
    try{
        const produit = await Product.find();
        res.json(produit)

    }catch(error){
        console.error(error.message)
}
},
//deleteProduct
deleteProduct:async(req,res)=>{
    try{
    const produit = await Product.findByIdAndDelete(req.params.id)
    res.json(produit)
}catch(error){
    console.error(error.message)
}
},
//updateProduct
updateProduct:async(req,res)=>{
    try{
        const produit = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(produit)
    }catch(error){
        console.error(error.message)
}
}



}

