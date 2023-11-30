import bcrypt from "bcrypt";
import usersTable from "../table/usersModel.js";

export const createUsers = async (id, username, email, password) => {
  const hashedPassword = await bcrypt.hashSync(password, 10);
  usersTable.create({
    id,
    username,
    email,
    password: hashedPassword,
  });
};

export const findUsers = async (username, password) => {
  try {
    const user = await usersTable.findOne({ where: { username } });
    if (user) {
      const result = await bcrypt.compareSync(password, user.password);
      if (result) {
        return user;
      }
    }
  } catch (error) {
    console.error(`error ${error}`);
    throw error;
  }
};

export const usernameCheck = async (username) => {
  try {
    const user = await usersTable.findAll({ where: { username } });
    if (user) {
      return user
    }
  } catch (error) {
    console.log(`error ${error}`);
    throw error
  }
}

export const emailCheck = async (email) => {
  try {
    const user = await usersTable.findAll({ where: { email } })
    if (user) {
      return user
    }
  } catch (error) {
    console.log(`error ${error}`)
    throw error
  }
}

export const findUsername = async (username) => {
  try {
    const user = await usersTable.findOne({ where: { username } })
    if (user) {
      return user
    }

  } catch (error) {
    console.error('error',error);
    throw error
  }
}