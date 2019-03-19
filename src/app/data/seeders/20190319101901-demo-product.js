'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Product', [{
      "guid": "962809b6-372f-4214-8302-37626307e58d",
      "isActive": false,
      "price": "$1,916.13",
      "company": "EVIDENDS",
      "about": "Qui consequat velit anim veniam ipsum Lorem magna mollit eiusmod elit eiusmod."
    },
    {
      "guid": "cc665243-51cf-4280-87f5-9e2c7457c851",
      "isActive": true,
      "price": "$1,656.27",
      "company": "MELBACOR",
      "about": "Et sit minim officia incididunt."
    },
    {
      "guid": "0a68e724-57ee-4d80-9c3c-d83ee82307c8",
      "isActive": false,
      "price": "$2,030.62",
      "company": "VOIPA",
      "about": "Aute in esse tempor enim exercitation excepteur nulla qui elit proident aliquip ut eu."
    },
    {
      "guid": "fdd945a4-668d-443c-abed-2ee742098629",
      "isActive": true,
      "price": "$2,413.16",
      "company": "CORPULSE",
      "about": "Et amet laborum laborum esse aliqua velit anim labore aute."
    },
    {
      "guid": "a9cec010-7e84-470e-8e10-c78f64c724cc",
      "isActive": true,
      "price": "$3,951.97",
      "company": "RECOGNIA",
      "about": "Tempor pariatur nisi sunt ad magna cillum dolor cillum nostrud incididunt sint occaecat voluptate."
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product', null, {});
  }
};
