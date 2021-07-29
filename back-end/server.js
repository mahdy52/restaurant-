const express = require ('express')
const app = express()
const db = require('./config/db')
db();
const cors = require('cors')


app.use(cors())    
app.use(express.json());   // converter data to json documents


//config server 
const PORT = process.env.PORT || '4000'
app.listen(PORT,()=>{
    console.log(`server ya5dem bruh ${PORT}`);
})



//user 
const userRoutes = require('./route/useRouter')
app.use('/app/user',userRoutes)  


//product
const productRoutes = require('./route/productRouter') 
app.use('/app/prod',productRoutes )


//command
const commandRoutes = require('./route/commandRouter')
app.use('/app/command',commandRoutes )



