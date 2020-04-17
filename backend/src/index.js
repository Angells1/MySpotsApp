const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const middleware = require('./middleware')

const app = express(); 




app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(routes);

app.use(middleware.notFound);
app.use(middleware.errorHandler);    



app.listen(3333);