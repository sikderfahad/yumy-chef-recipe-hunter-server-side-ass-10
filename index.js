const express = require("express");
const cors = require("cors");
const app = express();

const chefs = require("./data.json");

app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Chef server is running ...!");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = +req.params.id;
  const selectedChef = chefs.find((c) => c.id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`My chef server port is: ${port}`);
});
