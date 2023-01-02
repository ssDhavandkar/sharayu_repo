var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.sendFile(index.html);
});
app.listen(4400);
console.log("server is running at port 4400");
