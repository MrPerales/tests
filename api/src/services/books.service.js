const MongoLib = require("../libs/mongo.libs");

class BooksService {
  constructor() {
    this.collection = "books";
    this.mongoDB = new MongoLib();
  }
  getBooks(query) {
    return this.mongoDB.getAll(this.collection, query);
  }
  getBook(id) {
    return this.mongoDB.get(this.collection, id);
  }
  createBook(newBook) {
    return this.mongoDB.create(this.collection, newBook);
  }
  deleteBook(id) {
    return this.mongoDB.delete(this.collection, id);
  }
}

module.exports = BooksService;
