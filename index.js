var restify = require('restify');

//Create Server
var server = restify.createServer();

//Set endpoint
server.get('/api/test',log);
server.get('/api/test2',log);

//Set functoin
function log(req,res,next){
    console.log('req.url: '+req.url);
    res.send("Success");
}

//Listen
server.listen(process.env.port || process.env.PORT || 8080,function(){
    console.log('%s listening at %s', server.name, server.url);
});