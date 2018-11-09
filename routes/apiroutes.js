Table = {
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: ""
};

var path = require ('path');

module.exports = function(app) {
    let aoTables = [{}];
    // returns table info
    app.get("/tables", function(req, res) {
        fs.readFile(path.join(__dirname, "app/data/tableDat.json"), data);
        aoTables = JSON.parse(data);
        return res.json(aoTables);
    });
    
    app.post ("/reservation", function (req, res) {
        aoTables.push (req.body);
        fs.writeFile(path.join(__dirname, "app/data/tableDat.json"),
         JSON.stringify(aoTables),
        function (err) {
            console.log(err)
        });
    });
}