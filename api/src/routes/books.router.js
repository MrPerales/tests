const express = require("express");
const BooksService = require("../services/books.service");

const router = express.Router();
const booksService = new BooksService();

router.get("/", async (req, resp, next) => {
  try {
    const books = await booksService.getBooks();
    resp.status(200).json(books);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, resp, next) => {
  try {
    const { id } = req.params;
    const rta = await booksService.getBook(id);
    resp.status(200).json(rta);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, resp, next) => {
  try {
    const { body } = req;
    const newBook = await booksService.createBook(body);
    resp.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
