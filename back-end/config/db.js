const mongoose = require ('mongoose')
const db_connection =()=>{
    mongoose.connect('mongodb+srv://mahdi:mahdi123@cluster0.7r8dm.mongodb.net/resto?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })

    .then (() => console.log('database connected omourna mrgla'))
    .catch(() => console.log('error'))
}


module.exports = db_connection 