


'use strict';
const crypto = require('crypto');
const bcrypt = require("bcryptjs")




var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2))
            .toString('hex') /** convert to hexadecimal format */
            .slice(0,length);   /** return required number of characters */
};

var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        password:value,
    };
};


exports.comparePass = function(userpass, salt, hashedpass) {
   return sha512(userpass, salt).passwordHash === hashedpass
}


exports.hashPass = function(userpassword) {

    var salt = genRandomString(16); /** Gives us salt of length 16 */
    var password = sha512(userpassword, salt);
    
    bcrypt.hash(userpassword, 11, function(err, hash) {
        password = hash
        
       })

    return password;
}


exports.bcryptcompare = function(userpass, hash){
   return 

}

///////////////////////////////////////////////

    exports.bcrypthash = function(userpassword) {
   
        let password
        bcrypt.hash(userpassword, 11, function(err, hash) {
            return hash
            
           })

         
    }


   

/*exports.cryptPassword = bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});*/


