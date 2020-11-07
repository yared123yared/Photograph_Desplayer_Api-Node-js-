'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LoggedInPhotographer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LoggedInPhotographer.init({
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LoggedInPhotographer',
  });
  return LoggedInPhotographer;
};