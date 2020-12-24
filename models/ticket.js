'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.Event, {foreignKey: 'eventId'})
      Ticket.hasMany(models.Transaction, {foreignKey: 'ticketId'})
    }
  };
  Ticket.init({
    price: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    type_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};