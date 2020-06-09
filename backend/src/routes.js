const {Router} = require('express');
const UserController = require('./controller/UserController')
const ProductController = require('./controller/ProductController');
const middleware = require('./middleware')

const routes = Router();

routes.post('/api/sessions', UserController.store);

routes.post('/api/auth/signin', UserController.validation);

routes.post('/api/validation', UserController.usernameValidation)

routes.get('/api/spot/:id', middleware.checkToken, ProductController.find)

routes.get('/api/spot', middleware.checkToken, ProductController.index);

routes.post('/api/spot', middleware.checkToken, ProductController.store);

routes.delete('/api/spot', middleware.checkToken, ProductController.destroy);

routes.get('/api/auth/token', middleware.validateToken)

routes.post('/api/blob/image', UserController.uploadImageUsr)

routes.post('/api/blob/avatar', middleware.checkToken, UserController.findAvatar)





module.exports = routes;