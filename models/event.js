'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.Location, {foreignKey: 'locationId'})
      Event.hasMany(models.Ticket, {foreignKey: 'eventId'})
      Event.hasMany(models.Transaction, {foreignKey: 'eventId'})
    }
  };
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};