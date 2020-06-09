// Update with your config settings.
require('dotenv').config();
// require('dotenv').config({
//   path: process.env.NODE_ENV === 'test' ? ".env.test" : ".env"
// });

module.exports = {

  test: {

    client: 'sqlite3',
    connection: {
       // filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),   
        filename:'./__tests__/database.sqlite',
    },
    migrations: {
      directory: './database/migrations'
    },
    useNullAsDefault: true,
  },

  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './database/migrations'
    },
    useNullAsDefault: true,
    
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DB_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './database/migrations',
    }
  }

};
