let express = require('express');
let app = express();

let message = "Hello World";
console.log(message);

// app.get('/', (req, res) => {
// 
//     res.send("Hello Express");
// 
// });

app.get('/', (req, res) =>{

    res.sendFile(__dirname +'/views/index.html');

});





























 module.exports = app;
