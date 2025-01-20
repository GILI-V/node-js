
const express = require('express');
const app = express();
const HelpRequestRouter = require('./3-api_routes/HelpRequest.roter')

require('dotenv').config();

const hostname = process.env.HOST_NAME || '127.0.0.1';
const port = process.env.PORT;

app.use(express.json());

app.use('/api/HelpRequest',HelpRequestRouter);

app.listen(port, hostname, () => {
    console.log(`server is up in address http://${hostname}:${port}`);
})
