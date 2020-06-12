

const express = require('express');
//const routes = require('./routes');
const cors = require('cors');
//const middleware = require('./middleware')

class AppController {

    constructor(){

        this.express = express();
        this.middlewares();
        this.routes();
        this.handlers();


     } 

     middlewares(){
         this.express.use(express.json());
        this.express.use(cors())

        
      
     }


     routes() {
         this.express.use(require('./routes'));
     }


     handlers() {
         // app.use(middleware.notFound);
        // app.use(middleware.errorHandler);
        this.express.use(require('./middleware').notFound);     
        this.express.use(require('./middleware').errorHandler); 
     }

}

module.exports = new AppController().express;


// const app = express(); 




// app.use(cors({
//     origin: 'http://localhost:3000'
// }));


// app.use(express.json());
// app.use(routes);

// app.use(middleware.notFound);
// app.use(middleware.errorHandler);  
  



// app.listen(3333);
