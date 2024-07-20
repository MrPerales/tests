const { sum, multiply, divide, secondsConverter } = require("./02-math");
// sum
test("adds 1+3 should be 4", () => {
  const resp = sum(1, 3);
  expect(resp).toBe(4);
});
//multiply
test("multiply 1*3 should be 3 and 2*6 should be 12", () => {
  const resp = multiply(1, 3);
  const resp2 = multiply(2, 6);
  expect(resp).toBe(3);
  expect(resp2).toBe(12);
});

// divide
test("divide 4/2 should be 2", () => {
  const resp = divide(4, 2);
  expect(resp).toBe(2);
});
test("divide n/0 should be null", () => {
  const resp = divide(4, 0);
  expect(resp).toBeNull();
});

// reto
test("converts seconds to hours , minutes and seconds", () => {
  const resp = secondsConverter(3600);
  expect(resp).toBe("1:0:0");

  const resp2 = secondsConverter(5400);
  expect(resp2).toBe("1:30:0");

  const resp3 = secondsConverter(0);
  expect(resp3).toBe("0:0:0");
});

test("if argument is diferent from number should be null", () => {
  const resp = secondsConverter("i am not number ");
  expect(resp).toBeNull();
});
