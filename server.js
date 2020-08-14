const express = require('express');
const connection = require("./src/connection");
const crud = require('./api/crud');
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Sample App is listening on PORT: ${PORT}`);

  connection().then(() => { console.log("Connected to Mongo!") });

});

app.get("/", (req, res) => {
  data = {
    "name": "Sample App"
  }
  res.json(data);
});

app.get("/users", async (req, res) => {

  await crud.getAll().then((result) => {
    res.json(result);
    console.log("Users: " + result);
  }).catch(e => {
    res.sendStatus(404);
  });

});

app.post("/insert", async (req, res) => {
  await crud.addOne("john", 30, "cricket").then(result => {
    console.log(result);
    res.send(result);
  }).catch(e => { console.log(e) });
});