const express = require("express");

const db = require("./utils/database");
const initModels = require("./models/initModels");
const config = require("./config");
const pokemonsRouter = require("./pokemons/pokemons.router");

const app = express();

db.authenticate()
  .then(() => console.log("DB Authentication Succesfully"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));

initModels();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "OK!" });
});

app.use("/pokemons", pokemonsRouter);

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`);
});
