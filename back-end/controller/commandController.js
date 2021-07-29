const Commande = require('../model/commandModel')


module.exports ={
    //addcommade
    addCommand:async(req,res)=>{
        const name = req.body.name
        const reference = req.body.reference

        try{
            command = new Commande({
                name,
                reference
            })
            await command.save()
            res.json(command)
    }catch(error){
        console.error(error.message)
   
}
},
//getCommand
getCommand:async(req,res)=>{
    try{
        const command = await Commande.find();
        res.json(command)

    }catch(error){
        console.error(error.message)
}
},
//deleteCommand
deleteCommand:async(req,res)=>{
    try{
    const command = await Commande.findByIdAndDelete(req.params.id)
    res.json(command)
}catch(error){
    console.error(error.message)
}
},
//updateCommand
updateCommand:async(req,res)=>{
    try{
        const command = await Commande.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json(command)
    }catch(error){
        console.error(error.message)
}
}
}