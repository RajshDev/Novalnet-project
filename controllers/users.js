const mysql =require("mysql");


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



exports.register=(req,res)=>{
console.log(req.body)
const {name,email,number,pass}=req.body;
console.log(name);
console.log(email);
console.log(number);
console.log(pass);

db.query("select email from users where email=?",[email],
(error,result)=>{
  if(error){
    confirm.log(error);
  }
  if(result.length>0)
  {
    console.log("register",{msg:"email is already teken",msg_type:"error"});
  }
  else if (pass.length<8)
  {
    return res.render("register",{msg:"Minimum 8 characters length with a-zA-Z0-9",msg_type:"error"});
  }
   db.query("insert into users set ?",
   {
    name:name,
    email:email,
    number:number,
    pass:pass
    
   },
   (error,result)=>{
      if(error){
        console.log(error);
      }else{
        console.log(result);
        return res.render("register",{mas:"user added",msg_type:"good"});
      }

   }
   );
  }
  );
  };

