module.exports = function(app){
    
    app.get("/home", function(req, res){
        var json = {
            title : "Hello World com PM2!",
            projectName: "Node JS com PM2"
        };
        res.send(json);
    });

    app.get("/home/:id", function(req, res){
        res.send({
            param : req.params,
            queryParam: req.query 
        });
    });
}
