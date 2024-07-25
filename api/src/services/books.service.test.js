const BooksService = require("./books.service");

const fakeBooks = [
  {
    _id: 1,
    name: "libro 1",
  },
  {
    _id: 2,
    name: "libro 2",
  },
];
const mongoLibStub = {
  // remplazamos los metodos del verdado MONGOLIB
  getAll: () => [...fakeBooks],
  create: () => {},
};
// jest.mock para suplantar (mockear) el archivo mongo.libs.js.
// En lugar de cargar el módulo real, Jest cargará una función ficticia (mock) que devuelve mongoLibStub.
//  Esto te permite controlar el comportamiento de los métodos de MongoLib durante las pruebas.
jest.mock("../libs/mongo.libs.js", () => jest.fn().mockImplementation(() => mongoLibStub));

describe("Test for booksService ", () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    // limpiamos todos los mocks que se hayan echo antes de cada prueba
    jest.clearAllMocks();
  });

  describe("test for getBooks", () => {
    test("should return books", async () => {
      // arrenge
      // act
      const books = await service.getBooks();
      console.log(books);
      // assert
      expect(books.length).toEqual(2);
    });
    test("should return first book name", async () => {
      // arrenge
      // act
      const books = await service.getBooks();
      console.log(books);
      // assert
      expect(books[0].name).toEqual("libro 1");
    });
  });
});
