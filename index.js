const express = require ('express');
const port = 8080;

const app = express();

app.use('/', express.static(__dirname));

app.get("/", function(req, res){
	res.sendFile(process.cwd() + "/index.html");
})


app.listen(port, function(){
	console.log("Server Runing on Port" + port);
})