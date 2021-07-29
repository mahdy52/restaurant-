const express = require ('express')
const router = express.Router()
const User = require('../controller/userController')

 
router.post('/add',User.addUser)
router.get('/get',User.getUser)
router.delete('/:id/delete',User.deleteUser)
router.put('/:id/update',User.updateUser)


module.exports = router 