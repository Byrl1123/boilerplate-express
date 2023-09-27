let express = require('express');
let app = express();

let message = "Hello World";
console.log(message);

app.get('/', (req, res) => {

    res.send("Hello Express");

});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("app running in port 3000!");
})






























 module.exports = app;
