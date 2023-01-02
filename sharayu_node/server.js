var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.sendFile("<h3>Name : Sharayu</h3><h3>RollNo : 229205</h3><h3>EmailId : sharayuD@gmail.com</h3><h3>Address : Pune</h3>");
});
app.listen(4400);
console.log("server is running at port 4400");
