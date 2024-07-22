const Person = require("./06-peson");

describe("test for person", () => {
  let person;

  beforeEach(() => {
    // inicializamos la clase
    person = new Person("person", 45, 1.7);
  });

  test("should return down", () => {
    // solo cambiamos los parametros
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe("down");
  });

  test("should return normal", () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe("normal");
  });
});
