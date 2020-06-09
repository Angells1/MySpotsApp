const app = require('./index');
const cors = require('cors');
const middleware = require('./middleware')


app.use(cors({
    origin: 'http://localhost:3000'
}));
 

app.listen(3333)