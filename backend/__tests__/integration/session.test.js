

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
            email: 'gabriel.angelsad1234@gmail.com',
            pass: 'Lallal123',
            firstname: 'Gabriel',
            lastname: 'Angelo',
            borndate: '12/09/2000', 
            gender: 'Male', 
            avatarurl: 'Fake-Avatar-Url',
            username: 'morninsun123'
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
        email: 'gabriel.angelsad131@gmail.com',
        pass: 'Lallal123',
        firstname: 'Gabriel',
        lastname: 'Angelo',
        borndate: '12/09/2000', 
        gender: 'Male', 
        avatarurl: 'Fake-Avatar-Url',
        username: 'morninsun1214'
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
        email: 'gabriel.angel123d1@gmail.com',
        pass: 'Lallal123',
        firstname: 'Gabriel',
        lastname: 'Angelo',
        borndate: '12/09/2000', 
        gender: 'Male', 
        avatarurl: 'Fake-Avatar-Url',
        username: 'morninsun123121'
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

        
 

})



