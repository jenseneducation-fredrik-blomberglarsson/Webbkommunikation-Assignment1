const express = require("express");
const app = express();
const database = require("./modules/database-operations");
const endpoints = require("./modules/endpoints");
const port = process.env.PORT || 8000;

endpoints(app);

app.listen(port, () => {
  console.log("Server started on port: ", port);
  database.initiateDatabase();
});
