
const axios = require('axios');
const connection = require('../../database/connection')
const crypto = require('crypto');
let jwt = require('jsonwebtoken');

const multer = require('multer')


module.exports = {


  async find (request, response) {

    const {id} = request.params;
    
try {

  const spot = await Product.findById(id);
  return response.json(spot);

}catch(err) {

  return  response.status(400).send("Spot Not Found");
}

    console.log(spot);
   
  },



  async index (request, response) {

    const {userId} =  request;
    console.log(userId)
    const spots = await connection('spots').select('*');
    return response.json(spots);

  },



  async destroy (request, response){

    const { name } = request.params;

    const spot = await Product.findOne(name);

    if(spot) {

      const {_id} = spot;

      const spotex = await Product.deleteOne({_id});

      response.json(spotex);


    }

   

    

  },


    async store (request, response) {

      // const { name, product_img, description, price, cep, date } = request.body;
      const user_token = request.headers.authorization.slice(7, -1);
     // return response.json({name, product_img, description, price, city, date});

    console.log(request.files)
    console.log(JSON.parse(request.body.spot))
    const req = JSON.parse(request.body.spot);

    //  const {id:user_id} = await connection('user')
    //  .where('email', jwt.decode(user_token).email)
    //  .select('id')
    //  .first(); 

    const user_id = jwt.decode(user_token).id;
     
      let dNow = new Date();
      
      let localDate = `${dNow.getFullYear()}/${(dNow.getMonth()+1)}/${(dNow.getMonth()+1)}`
      
       const id = crypto.randomBytes(4).toString('HEX');
       const spot = await connection('spots')
       .insert({
         id,
         name: req.title, 
         description: req.description,
         price: req.price,
         product_img: request.files[0].filename,
         date: localDate,
         user_id
       })
  

    //    const id = crypto.randomBytes(4).toString('HEX');

    //   const spot = await connection('spots').insert({
    //     id,
    //     name,
    //     description,
    //     price,
    //     product_img,
    //     date,
    //     user_id
        
    //     //se nome da propriedade não for igual ao da variavel
    //     //colocar nome original da variavel antes
    // })


    // console.log(spot);
    
   return response.json({
     sucess: true,
     data: req,
    
   });
    
    }

    

};