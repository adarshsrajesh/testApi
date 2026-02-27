const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const router = require('./routes/router');
// dote // Import the router

app.use(express.json());
app.use(cors())
PORT = process.env.PORT || 6000;
app.use(router);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`API HIT cOUNTER ${PORT}`);
});
