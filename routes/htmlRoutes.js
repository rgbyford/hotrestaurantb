const path = require("path");

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/index.html"));
      });
      

      app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/tables.html"));
      });
      
      app.get("/makeReservation", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/reserve.html"));
      });
};