const express = require('express');
const port = process.env.PORT || 5001;
const app = express()
const path = require('path');
// need to find out whats body parser used for 
// const bodyParser = require('body-parser');
const cors = require('cors')
// testing on main branch 
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(cors())

app.use(express.static('client/build'));

app.listen(port, () => {
  console.log(`Hey! you are in port ${port}`);
});