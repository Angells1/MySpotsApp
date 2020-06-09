let jwt = require('jsonwebtoken');

const config = require('./config')
const validator = require('./helpers/validator')


let checkToken = (req, res, next) => {
    let token = req.headers['x-acess-token'] || req.headers['authorization'];

    if(token.startsWith('Bearer ')) {
        token = token.slice(7, token.lenght);

    }

    if(token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err){
                return res.status(400).json({
                    sucess: false,
                    message: 'Token is not valid'
                })
            }else {
                req.decoded = decoded;
                next();
                // return res.status(200).json({
                //     sucess: true,
                //     message: 'Token is valid'
                // })
            }
        });
    }else {
        return res.json({
            sucess: false,
            message: 'Auth token is not supplied'
        });
    }
};



let validateToken = (req, res) => {
    console.log('cheguei')
    let token = req.headers['x-acess-token'] || req.headers['authorization'];

    if(token.startsWith('Bearer ')) {
        token = token.slice(7, token.lenght);

        jwt.verify(token, config.secret, (err, decoded) => {
            if(err){
                return res.status(200).json({
                    sucess: false,
                    message: 'Token is not valid'
                })
            }else {
                req.decoded = decoded;
                res.status(200).json({
                    sucess: true,
                    message: 'Token is valid'
                })
            }
        });


    }

    if(token) {


    }else {
        return res.json({
            sucess: false,
            message: 'Auth token is not supplied'
        });
    }


}



/*app.use((req,res,next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404); 
    next(error);
});

app.use((error, req, res, next) => {
    statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'ops' : error.stack,
    })
 
})*/

const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (error, req, res, next) => {
    const statusCode = req.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'ops' : error.stack,
    })
}



const signup = (req, res, next) => {
    const validationRule = {

        "firstname": "required|string",
        "lastname": "required|string",
        "email": "required|email",
        "pass": "required|string|min:6|confirmed",
        "username": "required|string|min:4|max:12",
        "gender": "required|string",
        "borndate": "required"

    }

    validator(req.body, validationRule, {}, (err, status) => {

        if(!status) {

            res.status(412)
                .send({
                    sucess: false,
                    message: 'Validation failed',
                    data: err 
                });
            } else {
                next();
                return res.send('sucessful')
            }   

    });

}




module.exports = {
    checkToken,
    validateToken,
    notFound,
    errorHandler,
    signup    
}