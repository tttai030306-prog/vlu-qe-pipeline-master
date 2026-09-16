// Login authentication function for QE pipeline

function login(username, password) {
  // Tài khoản bị khóa
  if (username === "locked") {
    return false;
  }

  // Username rỗng
  if (!username || username.trim() === "") {
    return false;
  }

  // Mật khẩu rỗng
  if (!password || password.trim() === "") {
    return false;
  }

  // Mật khẩu chứa ký tự đặc biệt
  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    return false;
  }

  // Kiểm tra tài khoản và mật khẩu
  if (username === "admin" && password === "123") {
    return true;
  }

  return false;
}

module.exports = { login };
