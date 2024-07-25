const express = require("express");
const homeRouter = require("./homeRouter");
const booksRouter = require("../routes/books.router");

function routerApi(app) {
  const router = express.Router();

  app.use("/api/v1", router);
  router.use("/home", homeRouter);
  router.use("/books", booksRouter);
}
module.exports = routerApi;
