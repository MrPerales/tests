// matchers

test("test object", () => {
  const data = { name: "Carlos" };
  data.nickname = "carloos";
  // para objetos usamos toEqual
  expect(data).toEqual({ name: "Carlos", nickname: "carloos" });
});

test("null", () => {
  const data = null;
  expect(data).toBeNull(); // Un nulo está definido como nulo.
  expect(data).toBeDefined(); // Un definido es otro tipo de dato en JS
  expect(data).not.toBeUndefined(); // Podemos usar negaciones.
});

test("booleans", () => {
  // Booleanos directos.
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  // Datos considerados como booleanos.
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
  expect(1).toBeTruthy();
});

test("string", () => {
  // podemos preguntar si coincide una parte arbitraria con la cadena
  expect("christoph").toMatch(/stop/);
});

test("list/array", () => {
  // Podemos preguntar si contiene una parte arbitraria con el arreglo.
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(numbers).toContain(4);
});
