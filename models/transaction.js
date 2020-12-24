'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Ticket, {foreignKey: 'ticketId'})
      Transaction.belongsTo(models.Event, {foreignKey: 'eventId'})
    }
  };
  Transaction.init({
    ticket_qty: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};