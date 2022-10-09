import client from "../../client";
import bcrypt from "bcrypt";

const SALT = process.env.SALT;

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      const existingUser = await client.user.findFirst({
        where: { OR: [{ email }, { username }] },
      });
      if (existingUser)
        return {
          ok: false,
          error: "This username/email is already taken",
        };

      const hashedPassword = await bcrypt.hash(password, +SALT);

      const newUser = await client.user.create({
        data: {
          firstName,
          lastName,
          username,
          email,
          password: hashedPassword,
        },
      });
      return {
        ok: true,
        user: newUser,
      };
    },
  },
};
