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
// spies
const mockGetAll = jest.fn();
const mongoLibStub = {
  // remplazamos los metodos del verdado MONGOLIB
  getAll: mockGetAll,
  create: () => {},
};
// jest.mock para suplantar (mockear) el archivo mongo.libs.js.
// En lugar de cargar el módulo real, Jest cargará una función ficticia (mock) que devuelve mongoLibStub.
//  Esto te permite controlar el comportamiento de los métodos de MongoLib durante las pruebas.
jest.mock("../libs/mongo.libs.js", () =>
  jest.fn().mockImplementation(() => ({
    // remplazamos los metodos del verdado MONGOLIB
    getAll: mockGetAll,
    create: () => {},
  }))
);

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
      // me ayuda a poder inyectar diferente fake informacion en cada escenario de prueba
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      const books = await service.getBooks();
      console.log(books);
      // assert
      expect(books.length).toEqual(2);
      // lo vamos a poder espiar si fue llamado
      expect(mockGetAll).toHaveBeenCalled();
      // cuantas veces fue llamado
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      //fue llamado con que argumentos
      // expect(mockGetAll).toHaveBeenCalledWith("books", {});
    });
    test("should return first book name", async () => {
      // arrenge
      // cambiamos info para hacer diferentes pruebas
      mockGetAll.mockResolvedValue([
        {
          _id: 3,
          name: "libro 3",
        },
      ]);
      // act
      const books = await service.getBooks();
      console.log(books);
      // assert
      expect(books[0].name).toEqual("libro 3");
    });
  });
});
