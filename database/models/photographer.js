'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photographer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here


      Photographer.hasMany(models.Photos, {
        foreignKey: 'PhotographerEmail',
        as: 'photos',
        onDelete: 'CASCADE',
      });
    }
  };
  Photographer.init({
    FName: DataTypes.STRING,
    LName: DataTypes.STRING,
    Gender: DataTypes.STRING,
    Email: DataTypes.STRING,
    WorkTitle: DataTypes.STRING,
    Country: DataTypes.STRING,
    City: DataTypes.STRING,
    Password: DataTypes.STRING,
    ProfilePictureName: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Photographer',
  });
  return Photographer;
};