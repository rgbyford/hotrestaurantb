Table = {
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: ""
};

module.exports = function(app) {
    let aoTables = [{}];
    // returns table info
    app.get("/tables", function(req, res) {
        return res.json(aoTables);
    });
    
    app.post ("/table", function (req, res) {
        aoTables.push = req.body;
    });
    
    // Displays a single character, or returns false
    app.get("/api/characters/:character", function(req, res) {
        const chosen = req.params.character;
    
        console.log(chosen);
    
        for (let i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
        }
    
        return res.json(false);
    });
    
    // Create New Characters - takes in JSON input
    app.post("/api/characters", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
       const newcharacter = req.body;
    
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newcharacter);
    
        characters.push(newcharacter);
    
        res.json(newcharacter);
    });
};