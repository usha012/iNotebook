const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://usha:Cliffex123@cluster0.nekhhfl.mongodb.net/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=> {console.log("connected to mongodb")})
    .catch((err)=> {console.log("err in mongodb:", err)})
}
module.exports = connectToMongo;