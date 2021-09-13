const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
// const passport = require('passport');
// const { response } = require("express");
const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:function(req , file , cb){
        cb(null, './uploads/');
    },
    filename:function(req ,file ,cb){
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({
    storage : storage
})






const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json())
app.use(express.static("public"));


///////////////////////////////////////////////////////////// Database Work ///////////////////////////////////////////////////////////////////////


let db  =  mongoose.connect("mongodb+srv://admin_shivam:Test123@cluster0.h5bdc.mongodb.net/TEST1?retryWrites=true&w=majority",{useNewUrlParser:true,
useUnifiedTopology:true});


const usersData = new mongoose.Schema({
    email:String,
    password:String,
    logdate: String
})
const user = mongoose.model("user" , usersData);

 let d=mongoose.connection

// Check connection
d.once('open', () => {
    console.log('Connected to MongoDB!');
  })

// Check for DB errors
d.on('error', (err) => {
    console.log(err);
  });


app.post("/register",function(req , res){
    //console.log(req.body)
    //console.log(req.headers.pass);
    //console.log(req.headers.user);
    let curdate = new Date();
    const person = new user({
        email : req.body.user,
        password : req.body.pass,
        logdate: curdate
    });
    person.save(function(err){
        if(err){
            console.log(err);
        } else {
            console.log(req.body)
            
            res.send(person);
            //console.log("done")
        }
    });

});

app.post('/log',function(req ,res){

    const userName = req.body.user;
    const passWord = req.body.pass;
    // console.log(userName);
    // console.log(passWord);

    user.findOne({email : userName} , function (err , foundUser){

        if(err)
        {
            console.log(err);
        } 
        else 
        {
            if(foundUser)
            {
                if(foundUser.password === passWord)
                {
                    console.log('user authenticated');
                }
                else{
                    console.log('user not found');
                }
            }
        }
    });
});

/////product connection schema/////

let prod_conn = mongoose.createConnection("mongodb+srv://admin_shivam:Test123@cluster0.h5bdc.mongodb.net/Product_test?retryWrites=true&w=majority",{useNewUrlParser:true,
useUnifiedTopology:true});

const product = new mongoose.Schema({
    P_Name:String,
    img:String,  
    Category:String,
    Discription:String,
    Price:Object,
    AddDate:Date,
    AdminId:String,
    stock:Number
})
const prod = prod_conn.model("Products" , product);

////////////Product operation below /////////

app.post('/add',upload.single('img'), function(req,res){
// console.log(request.file);
const data = new prod({
    P_Name:req.body.pname,
    img:req.file.filename,
    Category:req.body.cat,
    Description:req.body.description,
    Price:req.body.price,
    AddDate:date = Date.now(),
    AdminId:"Test",
    
});
data.save(function(err){
    if(err){
        console.log(err);
    } else {
        console.log(data)
        //console.log("done")
    }
    res.send(data)
});
 })
app.get('/log',function(req ,res){
    
    //const search = req.body.searchKeyword;
    prod.find({} ,function(err ,product){
        if(err){
            console.log(err);
        }
        else{
            console.log(product);
            res.send(product);
        }
    })
})








app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running");
})



//////////////////////////// TO DELETE ALL RECORD COMMAND ////////////////////


// app.get('/del',function(req,res){
//     prod.deleteMany({},function(err){
//         if(err){
//             console.log(err);
//         }
//     })
// })

////////////////////////////////////////////////////////////////////////////////////
//Name export 

