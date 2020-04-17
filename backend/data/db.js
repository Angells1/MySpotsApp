const knex = require('knex');

const knexfile = require('../knexfile');

const env = process.env.NODE || 'development';
const configOptions = knexfile[env];

module.exports = knex(configOptions);