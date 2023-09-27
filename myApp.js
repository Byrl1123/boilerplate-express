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

    res.sendFile(__dirname + '/views/index.html');

});


// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get('/json', res.json(
    {"message": "Hello json"}
) + '/json');



























 module.exports = app;
