const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Pokemons = db.define("products", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false, //? not null
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Pokemons; //Export default
