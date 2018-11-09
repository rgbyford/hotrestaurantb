const path = require("path");

module.exports = function(app){
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/index.html"));
      });
      
      app.get("/seeTable", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/table.html"));
      });
      
      app.get("/makeReservation", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/reserve.html"));
      });
};