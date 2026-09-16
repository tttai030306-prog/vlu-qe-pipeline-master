const { login } = require("./auth");

test("Mật khẩu sai", () => {
  expect(login("admin", "wrongpassword")).toBe(false);
});

test("Username rỗng", () => {
  expect(login("", "123")).toBe(false);
});

test("Mật khẩu chứa ký tự đặc biệt", () => {
  expect(login("admin", "12@3")).toBe(false);
});

test("Tài khoản bị khóa", () => {
  expect(login("locked", "123")).toBe(false);
});

test("Mật khẩu rỗng", () => {
  expect(login("admin", "")).toBe(false);
});
