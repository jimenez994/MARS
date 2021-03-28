const express = require('express');
const port = process.env.PORT || 5000;
const app = express()
const path = require('path');
// const bodyParser = require('body-parser');
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(cors())

app.use(express.static('client/build'));

app.listen(port, () => {
  console.log(`Hey! you are in port ${port}`);
});