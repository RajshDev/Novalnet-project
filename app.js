const express = require("express");
const mysql = require("mysql");
const doenv = require("dotenv");
const path =require("path");
const hbs =require("hbs");


const app = express();

doenv.config({
    path:"./.env",
});

const db = mysql.createConnection({
    // host:"localhost",
    // user:"root",
    // password:"root",
    // database:"Login_DB",
    host: process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASS,
    database:process.env.DATABASE,
});


db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("mysql done!!!");
    }
});

app.use(express.urlencoded({extended:false}));

console.log(__dirname);

const location=path.join(__dirname,"./public");
app.use(express.static(location));
app.set("view engine", "hbs");

const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);


app.use("/", require("./routers/pages"));
app.use("/auth",require("./routers/auth"));
 

app.listen(5000, () => {
  console.log("Server Started @ Port 5000");
});

