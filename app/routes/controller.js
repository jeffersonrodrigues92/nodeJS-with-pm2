module.exports = function(app){
    var json = {
        title : "Hello World com PM2!"
    }
    app.get("/home", function(req, res){
        res.send(json);
    });
}
