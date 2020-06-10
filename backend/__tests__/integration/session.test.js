

const connection = require('../../database/connection')
const crypto = require('crypto');
const truncate = require('../../__tests__/utils/truncate')
const bcrypt = require('bcryptjs');
const request = require('supertest');
const app = require('../../src/index')


describe('Authentication', () => {


  beforeEach( async() => {
     await truncate();
  });

    it('should authenticate with valid credentials ', async () => {


        const user = {
            id: crypto.randomBytes(4).toString('HEX'),
            email: 'emailfake1@gmail.com',
            pass: 'senhaqualquer123',
            firstname: 'Nome',
            lastname: 'Sobrenome',
            borndate: '05/05/1998', 
            gender: 'Male', 
            avatarurl: 'Fake-Avatar-Url',
            username: 'username1'
         }


         const register = await request(app)
            .post('/api/sessions')
            .send(user);


          

       
         const login = await request(app)
            .post('/api/auth/signin')
            .send({
                email: user.email,
                pass: user.pass,    
            })
        
           
           
        
         expect(login.status).toBe(200);

    });


    it("should not authenticate with invalid credentials", async () => {

      const user = {
        id: crypto.randomBytes(4).toString('HEX'),
        email: 'emailfake2@gmail.com',
        pass: 'senhaqualquer',
        firstname: 'Nome',
        lastname: 'Sobrenome',
        borndate: '04/02/1997', 
        gender: 'Male', 
        avatarurl: 'Fake-Avatar-Url',
        username: 'username2'
     }


     const register = await request(app)
     .post('/api/sessions')
     .send(user);
     
   
     


     const login = await request(app)
        .post('/api/auth/signin')
        .send({
            email: user.email,
            pass: '4651252354',    
        })
    
     expect(login.body.status).toBe(403);
      
    });



    it('should return jwt token when authenticated', async () => {

      const user = {
        id: crypto.randomBytes(4).toString('HEX'),
        email: 'emailfake3@gmail.com',
        pass: 'senhaqualquer',
        firstname: 'Nome',
        lastname: 'Sobrenome',
        borndate: '15/05/1998', 
        gender: 'Male', 
        avatarurl: 'Fake-Avatar-Url',
        username: 'username3'
     }


     const register = await request(app)
     .post('/api/sessions')
     .send(user);
     

     
   
   
     const login = await request(app)
        .post('/api/auth/signin')
        .send({
            email: user.email,
            pass: user.pass,    
        })
    
    
     expect(login.body).toHaveProperty('token');
      


    });

       
    // afterEach( async() => {
    //    await truncate();
    // });

        it('should be able to acess private routes when authenticated', async () => {

         const user = {
            id: crypto.randomBytes(4).toString('HEX'),
            email: 'emailqualquer4@gmail.com',
            pass: 'senhaqualquer',
            firstname: 'Nome',
            lastname: 'Sobrenome',
            borndate: '05/06/1995', 
            gender: 'Male', 
            avatarurl: 'Fake-Avatar-Url',
            username: 'username4'
         }
    
    
         const register = await request(app)
         .post('/api/sessions')
         .send(user);
         
        
         const login = await request(app)
        .post('/api/auth/signin')
        .send({
            email: user.email,
            pass: user.pass,    
        })
   
      
         const response = await request(app)
         .get('/api/spot')
         .set('Authorization', `Bearer ${login.body.token}`)

         console.log(response)
         expect(response.status).toBe(200);

        });
 

      it('should not be able to acess private routes without jwt  ', async () => {

         const user = {
            id: crypto.randomBytes(4).toString('HEX'),
            email: 'emailqualquer5@gmail.com',
            pass: 'Lallal123',
            firstname: 'Nome',
            lastname: 'Sobrenome',
            borndate: '07/03/1995', 
            gender: 'Male', 
            avatarurl: 'Fake-Avatar-Url',
            username: 'username5'
         }
    
    
         const register = await request(app)
         .post('/api/sessions')
         .send(user);
         
        
         const login = await request(app)
        .post('/api/auth/signin')
        .send({
            email: user.email,
            pass: user.pass,    
        })
   
      
         const response = await request(app)
         .get('/api/spot')
         .set('Authorization', `Bearer ikpjasjkfijpsafip`)

 
         expect(response.status).toBe(400);


      })   


})



