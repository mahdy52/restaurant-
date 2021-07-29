const express = require ('express')
const router = express.Router()
const Product = require ('../controller/productController')


router.post('/add',Product.addProduct)
router.get('/get',Product.getProduct)
router.delete('/:id/delete',Product.deleteProduct)
router.put('/:id/update',Product.updateProduct)



module.exports = router 