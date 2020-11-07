module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Photographers',
    [
      {
        FName: 'Yared',
        LName: 'Solomon',
        Gender: 'Male',
        Email: 'yaredyaya16@gmail.com',
        WorkTitle: 'Software Engineering',
        Country: 'Ethiopia',
        City: 'Dessie',
        Password: 'yaredsolomon123',
        ProfilePictureName: 'yared.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        FName: 'Yared',
        LName: 'Solomon',
        Gender: 'Male',
        Email: 'yaredyaya60@gmail.com',
        WorkTitle: 'Software Engineering',
        Country: 'Ethiopia',
        City: 'Dessie',
        Password: 'yaredsolomon123',
        ProfilePictureName: 'yared.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }





    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Photographers', null, {}),
};

// database/seeds/xxxx-User.js