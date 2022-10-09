import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create secret key =https://randomkeygen.com

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      const foundUser = await client.user.findUnique({ where: { username } });
      if (!foundUser)
        return {
          ok: false,
          error: "User is not found.",
        };

      const isPasswordOK = await bcrypt.compare(password, foundUser.password);
      if (!isPasswordOK)
        return {
          ok: false,
          error: "Password is not Match.",
        };

      const token = jwt.sign({ id: foundUser.id }, process.env.SECRET_KEY);

      return {
        ok: true,
        token,
      };
    },
  },
};
