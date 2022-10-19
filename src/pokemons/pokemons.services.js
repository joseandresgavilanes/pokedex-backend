const pokemonsControllers = require("./pokemons.controllers");

const getAllPokemons = (req, res) => {
  pokemonsControllers
    .getAllPokemons()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getPokemonById = (req, res) => {
  const id = req.params.id;
  pokemonsControllers
    .getPokemonById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

module.exports = {
  getAllPokemons,
  getPokemonById,
};
