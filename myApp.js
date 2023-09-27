let express = require('express');
let app = express();

let message = "Hello World";
console.log(message);

app.get('/', (req, res) => {

    res.send("Hello Express");

});






























 module.exports = app;
