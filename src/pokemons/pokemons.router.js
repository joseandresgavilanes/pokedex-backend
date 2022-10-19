const router = require("express").Router();

const pokemonsServices = require("./pokemons.services");

router.get("/", pokemonsServices.getAllPokemons);
router.get("/:id", pokemonsServices.getPokemonById);

module.exports = router;
