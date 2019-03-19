'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      "guid": "80e7e821-9e70-4c83-a9fb-8c8514ee6089",
      "age": 38,
      "firstName": "Clayton",
      "lastName": "Frost",
      "email": "clayton.frost@gmail.com",
      "phone": "+1 (881) 535-3282"
    },
    {
      "guid": "d9b0dff8-f3ea-40c3-9e5c-550e4c5bead6",
      "age": 39,
      "firstName": "Hill",
      "lastName": "Curry",
      "email": "hill.curry@gmail.com",
      "phone": "+1 (824) 558-2793"
    },
    {
      "guid": "681cfe5f-f4b2-45a9-b296-0ef2b5a33cf0",
      "age": 25,
      "firstName": "Christian",
      "lastName": "Watts",
      "email": "christian.watts@gmail.com",
      "phone": "+1 (930) 439-2883"
    },
    {
      "guid": "7b81dc2a-65cd-4cfc-9150-2d4842a5f3b3",
      "age": 27,
      "firstName": "Ferguson",
      "lastName": "Fry",
      "email": "ferguson.fry@gmail.com",
      "phone": "+1 (971) 509-3627"
    },
    {
      "guid": "1f92ecca-cdf5-45ea-b012-cb321cd7c194",
      "age": 32,
      "firstName": "Concetta",
      "lastName": "Richardson",
      "email": "concetta.richardson@gmail.com",
      "phone": "+1 (992) 498-3875"
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
