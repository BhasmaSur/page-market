import { SYSTEM, USER } from "../constants/messages";
import prisma from "../server/prisma";
import { Encrypt } from "./encryptService";
import jwt from "jsonwebtoken";

const addUser = async (payload) => {
  try {
    const userExist = await prisma.user.findUnique({
      where: {
        email_id: payload.email_id,
      },
    });
    if (userExist) {
      return USER.USER_EXIST;
    }
    const encryptedPassword = await Encrypt.cryptPassword(payload.password);
    await prisma.user.create({
      data: {
        ...payload,
        password: encryptedPassword,
      },
    });
    return USER.USER_ADDED;
  } catch (e) {
    return SYSTEM.SOMTHING_WRONG;
  }
};

const userSignIn = async (payload) => {
  try {
    const userExist = await prisma.user.findUnique({
      where: {
        email_id: payload.email_id,
      },
    });
    if (userExist) {
      const userVerified = await Encrypt.comparePassword(
        payload.password,
        userExist.password
      );
      if (userVerified) {
        const jwtToken = jwt.sign(
          {
            username: payload.email_id,
            password: userExist.password,
            admin: false,
          },
          process.env.JWT_KEY
        );
        return {
          jwtToken: "Bearer " + jwtToken,
          type: payload.role,
        };
      } else {
        return USER.USER_WRONG_CREDS;
      }
    } else {
      return USER.USER_NOT_FOUND;
    }
  } catch (e) {
    return SYSTEM.SOMTHING_WRONG;
  }
};

const authenticateUser = async (token) => {
  const {username, password} = jwt.decode(token);
  const userExist = await prisma.user.findUnique({
    where: {
      email_id: username,
    },
  });
  if (userExist) {
    if (password === userExist.password) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export { addUser, userSignIn, authenticateUser };
