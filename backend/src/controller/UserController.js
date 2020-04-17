
const cipher = require('../configs/cipher')
const connection = require('../../database/connection')
const crypto = require('crypto');
var bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let config = require('../config');
let middleware = require('../middleware');
const uuid = require('uuid/v1');
const azure = require('azure-storage');


module.exports = {

    async store (request, response) {

        let {
             email, 
             pass, 
             firstname, 
             lastname, 
             borndate, 
             gender, 
             username
            } = request.body;
 

            console.log(email)
            console.log(pass)
            console.log(firstname)
            console.log(lastname)
            console.log(borndate)
            console.log(gender)
            console.log(username)
        
         const avatarurl = 'https://developmentpjct.blob.core.windows.net/imagescontainer/iconfinder_unknown_403017.png' 


    
        let user = await connection('user')
        .where('username', username)
        .orWhere("email", email)
        .select("username", "email")
        .first();
      
  

       // console.log(user)

          if(!user){

            bcrypt.hash(pass, 12, async function(err, hash) {
              const password = hash
              id = crypto.randomBytes(4).toString('HEX');
              const user = await connection('user').insert({
              id,
              email,
              password,
              firstname,
              lastname,
              borndate, 
              gender, 
              avatarurl,
              username
           });

            });

        
         return response.json(user);
       }
        
       
        
        if(user.username === username && user.email === email) {
          return response.status(409).send('User Alredy Exists')
        }
        else if(user.username === username){
          return response.status(409).send('Username is already in use')
        }else {
          return response.status(409).send('Email is already in use')
        }

        
      
      
      },


      async usernameValidation(request, response) {

        const {username, email} = request.body;

        console.log(username)
        console.log(email)
        console.log('pinto')

        const user = await connection('user')
        .where('username', username)
        .orWhere('email', email)
        .select('username', 'email')
        .first()

        console.log(user)

        if(user){
          if(user.email && user.username){
            return response.status(409).json({
              sucess: 'False',
              message: 'User already exists'
            })
          }
  
  
          else if(user.email && !user.username){
            return response.status(409).json({
              sucess: 'False',
              message: 'Username already exists'
            })
          }
  
  
          if(!user.email && user.username){
            return response.status(409).json({
              sucess: 'False',
              message: 'Email already exists'
            })
          }
        }


        return response.status(200).json({
          sucess: 'True'
        })



      },


      async validation (request, response) {


        
        let {email, pass } = request.body;
        
        console.log(email)
        console.log(pass)
        
        let user = await connection('user')
        .where('email', email)
        .select("email")
        .first();

        
        if(user) {
        let {password, firstname, lastname, id} = await connection('user')
        .where('email', email)
        .select("password", "firstname", "lastname", "id")
        .first();
        
        //const password = JSON.parse(sessions.password)
          //console.log(password.passwordHash)
      

          bcrypt.compare(pass, password, function(err, res) {
            if(res) {

              let token = jwt.sign({email: email},
                config.secret,
                { expiresIn: 86400, // expires in 24 hours
                }
              );
    
         
            return response.json({
              sucess: true, 
              message: 'Authentication sucessful',
              token: token,
              usrinfo: {
                firstname: firstname,
                lastname: lastname,
                id: id,
                token: token,
              }
            })
    

            } else {

              response.status(403).send('Incorrect username or password')

            } 
          });


     /*   if(cipher.bcryptcompare(pass, password)){

         

          let token = jwt.sign({email: email},
            config.secret,
            { expiresIn: 600, // expires in 24 hours
            }
          );

     
        return response.json({
          sucess: true, 
          message: 'Authentication sucessful',
          token: token
        })


        }else {
          
          response.status(403).send('Incorrect username or password')

        }*/

        }else {

          return response.status(400).json({
            sucess: false,
            message: 'Authentication failed, user not found'
          });
        }

        



      },


      async uploadImageUsr(req, res, next) {
        const blobSvc = azure.createBlobService("DefaultEndpointsProtocol=https;AccountName=developmentpjct;AccountKey=G+uEW2sjLIvDqXygzAmIEMQN7mZragRUKol0MmVelSzysJYbXJEmDQ8J5/yTp+LuyeGv6dB8dL+UdU5FUMampw==;EndpointSuffix=core.windows.net")

        let filename = uuid().toString() + '.jpg';
        let rawdata = req.body.image;
        let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

        let type = matches[1];

        let buffer = new Buffer(matches[2], 'base64');


        await blobSvc.createBlockBlobFromText('imagescontainer', filename, buffer, {
          contentType: type
      }, function (error, result, response) {
          if (error) {
              filename = 'default.png'
          }
      });

      const fileUrl = `https://developmentpjct.blob.core.windows.net/imagescontainer/${filename}`;
    return res.status(200).json({
        url: fileUrl
    });



      },


      async findAvatar (request, response) {

         const {id} = request.body;
         
         let {avatarurl} = await connection('user')
        .where('id', id)
        .select("avatarurl")
        .first();


        if(avatarurl) {
          
          return response.status(200).json({
            sucess: 'true',
            avatarurl: avatarurl
          })

        }else {
          return response.status(401).json({
            sucess: 'false',
          })

        }
         

      }

      
      
    
};