const express = require('express');
const port = process.env.PORT || 5000;
const app = express()
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));
    
//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

app.get("/", (req, res) => res.send("hello world"))

// require("./config/routes")(app);

app.listen(port, () => {
  console.log(`Hey! you are in port ${port}`);
});