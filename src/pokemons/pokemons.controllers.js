const uuid = require("uuid");
const Pokemons = require("../models/pokemons.models");

const getAllPokemons = () => {
  const data = Pokemons.findAll();
  return data;
};

const getPokemonById = async (id) => {
  const data = await Pokemons.findOne({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllPokemons,
  getPokemonById,
};
