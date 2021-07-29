const User =require ('../model/useModel')


module.exports = {
    //addUser
    addUser:async(req,res)=>{
         
            const name = req.body.name
            const email = req.body.email
            const adress = req.body.adress
            const password = req.body.password
            const phone = req.body.phone

        try {
            user = new User ({
                name,
                email,
                adress,
                password,
                phone
            })
            await user.save()
            res.json(user)


        }catch(error){
            console.error(error.message)
         }
    },
    //getuser
    getUser:async(req,res)=>{
        try{
            const user =await User.find();
            res.json(user)
            
        }catch(error){
        console.error(error.message)
 
        }
        
    },
    //delete
    deleteUser:async(req,res)=>{
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.json(user)
        }catch(error){
        console.error(error.message)
        
    }
 
},
//update
    updateUser:async(req,res)=>{
        try{
            const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json(user)
        
        }catch(error){
        console.error(error.message)
    }
}

}