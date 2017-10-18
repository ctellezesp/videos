const express = require ('express');
const port = process.env.PORT ||8080;
const app = express();

app.use('/', express.static(__dirname+"/public"));

app.get("/", function(req, res){
	res.sendFile(process.cwd() + "/public/index.html");
})


app.listen(port, function(){
	console.log("Server Runing on Port" + port);
})