const express = require("express");

const app = express();
const PORT = 3030;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


require('./routes/htmlRoutes')(app);
require('./routes/apiroutes')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});