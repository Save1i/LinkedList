const { LinkedList } = require("./main");

function init() {
  const list = new LinkedList();

  list.append("a").append("b").append("c");

  return list;
}

describe("linked List", () => {
  test("Append", () => {
    let list = init();

    expect(list.append("x").toString().toBe("( a ) -> ( b ) -> ( c ) -> null"));
  });
});
