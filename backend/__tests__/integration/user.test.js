

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
            email: 'gabriel.anad11231@gmail.com', 
            pass: 'Lallal123', 
            firstname: 'Gabriel', 
            lastname: 'Silva', 
            borndate: '12/09/2000', 
            gender: 'Male', 
            username: 'Morgsu12213n'
       })
    
       
       
       console.log(response)

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