const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const users = require('./routes/users.js');
const products = require('./routes/products.js');
const shops = require('./routes/shops.js');

app.use('/users', users);
app.use('/products', products);
app.use('/shops', shops);

app.use(bodyParser.json());

app.listen(1234,()=>console.log(`Listinig to port 1234...`));