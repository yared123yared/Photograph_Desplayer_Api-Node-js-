module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Photos',
    [
      {








        PhotographerEmail: 'yaredyaya16@gmail.com',
        PhotosName: 'yared.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {


        PhotographerEmail: 'yaredyaya60@gmail.com',
        PhotosName: 'yared.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },























    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Photographer', null, {}),
};

// database/seeds/xxxx-User.js