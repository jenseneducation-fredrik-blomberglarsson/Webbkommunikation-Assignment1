const database = require("./database-operations");

module.exports = app => {
  app.get("/api/getAllProducts", (request, response) => {
    const data = database.getProducts();
    response.send(data);
  });

  app.get("/api/getAllCart", (request, response) => {
    const data = database.getShoppingCart();
    response.send(data);
  });

  app.post("/api/addProductToCart", (request, response) => {
    const name = request.query.name;

    const res = database.insertProduct(name);
    response.send(res);
  });

  app.delete("/api/removeProduct", (request, response) => {
    console.log(request.url);
    const name = request.query.name;

    const res = database.removeProduct(name);
    response.send(res);
  });
};
