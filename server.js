const express = require('express');
const app = express();
const categoriesRouter = require('./2-routes/categories.router')
const productsRouter = require('./2-routes/products.router')

require('dotenv').config();

const hostname = process.env.HOST_NAME || '127.0.0.1';
const port = process.env.PORT;

app.use(express.json());

app.use('/api/categories',categoriesRouter);
app.use('/api/products',productsRouter);

app.listen(port, hostname, () => {
    console.log(`server is up in address http://${hostname}:${port}`);
})