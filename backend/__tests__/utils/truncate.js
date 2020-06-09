'use strict';

const Promise   = require('bluebird');
const knex      = require('../../database/connection');

const tables = [
  'spots',
  'user',
];

function truncate () {
  
    Promise.all(tables.map(table => {
    return knex(table).delete();
     
     
  }));
};

function seed () {
  return Promise.each(tables, function (table) {
    return knex(table).insert(require('./seeds/' + table));
  });
};

// describe('Integration Tests', function () {

//   beforeEach(function () {
//     return truncate().then(seed);
//   });

//   afterEach(function () {
//     return truncate();
//   });

//   require('require-all')(__dirname + '/specs');

// });

module.exports = truncate;