'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Review', [{
      "guid": "962809b6-372f-4214-8302-37626307e58d",
      "productId": "3961cc97-ccbc-4ace-9223-f8d24697bb80",
      "review": "Velit eu in ut pariatur veniam do eu ea nulla occaecat incididunt duis. Ex nisi cillum pariatur ea tempor. Enim incididunt irure sit tempor mollit sunt eiusmod cillum nulla consequat nostrud enim do. Aliquip aliquip quis occaecat culpa est amet dolor nulla esse ut excepteur ea laborum enim. Exercitation ex proident culpa fugiat nulla non do deserunt deserunt excepteur amet. Exercitation duis non culpa anim in. Dolor elit Lorem est fugiat est reprehenderit dolore Lorem duis consequat pariatur anim."
    },
    {
      "guid": "cc665243-51cf-4280-87f5-9e2c7457c851",
      "productId": "a820df86-9e97-492c-8db6-7736e3aa9e22",
      "review": "Excepteur reprehenderit magna anim elit mollit velit enim laboris in. Do esse qui nostrud aliquip dolore enim aliqua esse elit nostrud tempor sit. Proident exercitation reprehenderit veniam veniam adipisicing dolore sit adipisicing minim Lorem et non. Est reprehenderit excepteur esse quis ea laboris labore et ullamco labore ipsum do. Ex dolor veniam consectetur cillum duis occaecat non ex enim velit excepteur incididunt. Non id tempor qui enim incididunt adipisicing ut id esse velit."
    },
    {
      "guid": "9d6e98cc-dbc7-4a7f-8243-726f76975fc2",
      "productId": "0a68e724-57ee-4d80-9c3c-d83ee82307c8",
      "review": "Aute culpa anim mollit sit velit. Culpa ullamco eiusmod excepteur anim deserunt enim proident aliquip fugiat commodo adipisicing sint magna. Id officia nulla sunt duis. Voluptate esse duis non elit. Ad excepteur occaecat cupidatat est ipsum ut aliquip cillum fugiat et amet amet dolore. Quis in velit quis officia exercitation amet duis irure nostrud officia aliquip. Velit proident qui tempor quis est aute sunt reprehenderit anim."
    },
    {
      "guid": "fdd945a4-668d-443c-abed-2ee742098629",
      "productId": "ef0d48c6-e616-4db8-8401-cfff764f70f5",
      "review": "Cupidatat velit fugiat magna officia sunt sunt anim id nisi nulla adipisicing. Et consectetur culpa qui ullamco officia incididunt ut id. Ea sunt eiusmod minim et mollit deserunt dolor fugiat esse amet magna consequat consequat. Minim ea non dolore laborum est eiusmod minim. Aute aute cillum in adipisicing esse sit consectetur pariatur officia do. Cupidatat nostrud culpa ad aliqua incididunt ipsum officia dolore Lorem eu aute nisi cillum. Ex proident irure et ipsum id duis."
    },
    {
      "guid": "a9cec010-7e84-470e-8e10-c78f64c724cc",
      "productId": "3e027277-8ae3-4ef1-890e-e563ba49cd1a",
      "review": "Commodo Lorem est do laborum laborum qui est fugiat voluptate deserunt aute ut. Tempor consectetur ea consequat cillum. Aliqua sit consequat consectetur proident ex enim quis eu sunt dolor anim sunt. Aliqua nostrud occaecat eu officia et. Reprehenderit pariatur velit do qui. Nostrud exercitation cillum mollit minim cupidatat anim dolor non esse eiusmod velit. Occaecat id officia esse commodo excepteur culpa nulla sit aute."
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Review', null, {});
  }
};
