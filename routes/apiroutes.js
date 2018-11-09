Table = {
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: ""
};

var path = require ('path');
<<<<<<< HEAD
const fs = require ('fs');
=======
var fs = require ('fs');
>>>>>>> 8e6f5ead71e45ab4df4c822bb5a4f6055fd60aa6

module.exports = function(app) {
    let aoTables = [{}];
    // returns table info
<<<<<<< HEAD
    app.get("/tables", function(req, res) {
=======
    app.get("/Tables", function(req, res) {
>>>>>>> 8e6f5ead71e45ab4df4c822bb5a4f6055fd60aa6
        fs.readFile(path.join(__dirname, "app/data/tableData.json"), data);
        aoTables = JSON.parse(data);
        return res.json(aoTables);
    });
    
    app.post ("/makeReservation", function (req, res) {
        if (aoTables.length === 0) {
            // If no data (/tables hasn't been called), try reading it
            // There may be no data there, but that's OK
            fs.readFile(path.join(__dirname, "app/data/tableData.json"), data);
            aoTables = JSON.parse(data);
        }
        aoTables.push (req.body);
        fs.writeFile(path.join(__dirname, "app/data/tableData.json"),
         JSON.stringify(aoTables),
        function (err) {
            console.log(err)
        });
    });
}