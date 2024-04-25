const USER = {
  USER_EXIST: {
    message: "Username already exist, please try to login.",
    code: 409,
  },
  USER_ADDED: {
    message: "User created successfully, login please.",
    code: 201,
  },
  USER_NOT_FOUND: {
    message: "User not found, sign up please.",
    code: 404,
  },
  USER_WRONG_CREDS : {
    message: "Username or password incorrect.",
    code: 401,
  },
  USER_JWT_MISSING : {
    message: "JWT token missing in header"
  }
};

const SYSTEM = {
  SOMTHING_WRONG: {
    message: "Somthing went wrong, please try again later.",
    code: 500,
  },
};

export { USER, SYSTEM };
