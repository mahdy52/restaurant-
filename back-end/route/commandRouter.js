const express =require('express')
const router =express.Router()
const commande =require ('../controller/commandController')


router.post('/mycommand',commande.addCommand)
router.get('/get',commande.addCommand)
router.delete('/:id/delete',commande.addCommand)
router.put('/:id/update',commande.addCommand)

module.exports = router