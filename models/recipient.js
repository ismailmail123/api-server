'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // recipient.hasMany(models.user);
      // user.belongsTo(models.recipient);
    }
  }
  recipient.init({
    name: DataTypes.STRING,
    adress: DataTypes.STRING,
    phone: DataTypes.STRING,
    say: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'recipient',
  });
  return recipient;
};