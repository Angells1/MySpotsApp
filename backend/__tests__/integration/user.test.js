

const connection = require('../../database/connection')
const crypto = require('crypto');
const truncate = require('../../__tests__/utils/truncate')
const bcrypt = require('bcryptjs');
const request = require('supertest');
const app = require('../../src/index')




describe('User', () => {

    //  beforeAll( async() => {
    //    await truncate();
    // });


    beforeEach( async() => {
      await truncate();
    });
  
    it('should encrypt user password', async () => {
  
  


       // const trx = await connection.transaction();
       
  
       const response = await request(app)
       .post('/api/sessions')
       .send({
            email: 'emailqualquer6@gmail.com', 
            pass: 'Lallal123', 
            firstname: 'Nome', 
            lastname: 'Sobrenome', 
            borndate: '02/01/1998', 
            gender: 'Male', 
            username: 'username6'
       })
    
       
     

      const compareHash = await bcrypt.compare('Lallal123', response.body.password_hash)
     
      expect(compareHash).toBe(true);
  




  
  
  
    })


   
  
    afterEach( async() => {
      await truncate();
   });
   
   afterAll( async() => {
     return await truncate();
   });
    
  
  
  });