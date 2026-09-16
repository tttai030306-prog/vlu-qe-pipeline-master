const { login } = require("./auth");

test("Đăng nhập đúng với admin/123", () => {
  expect(login("admin", "123")).toBe(true);
});
