const express=require('express')
const app=express()
//creat port
const  port =5000

// creat database with server
const mongo_uri="mongodb+srv://ali_32:gomycode@cluster0.g6sqh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongo_uri,{useUnifiedTopology: true , useNewUrlParser: true}, (err)=>{
    err ? console.log(err) : console.log("database was connected successfully");
})

// parse data to json object
app.use(express.json());
// import person 
app.use('/person', require('./Routes/Person'));
 // listen on port 5000
 app.listen(port ,(err) => {
    err ? console.log(err) : console.log("running server on  port 5000.....");
})