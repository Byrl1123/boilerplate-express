let express = require('express');
let app = express();



let message = "Hello World";
console.log(message);

let response = "Hello json";


app.get('/', (req, res) =>{

    res.sendFile(__dirname + '/views/index.html');

});



// Normal usage
app.use(express.static(__dirname + "/public"));

// implementing a Root-Level request Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} ${req.ip}`);
  next();
});

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));




// app.get('/json', (req, res) => {
//     res.json(
//         {"message": "Hello json"}
//     );
// });

app.get('/json', (req, res) => {
    if (process.env['MESSAGE_STYLE'] === "uppercase") {
        response = "Hello JSON".toUpperCase();
      } else {
        response = "Hello json";
      }
    
});



app.get("/", (req, res) => {
    res.send("Hello Express");
  });























 module.exports = app;
