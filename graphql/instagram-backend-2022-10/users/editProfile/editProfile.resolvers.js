import client from "../../client";
import bcrypt from "bcrypt";
import { protectResolvers } from "../users.utils";
export default {
  Mutation: {
    editProfile: protectResolvers(
      async (
        _,
        {
          firstName,
          lastName,
          username,
          email,
          password: newPassword,
          bio,
          avatar,
        },
        { loggedInUser }
      ) => {
        console.log(avatar);
        let newHashedPassword = null;
        if (newPassword) {
          newHashedPassword = await bcrypt.hash(newPassword, +process.env.SALT);
        }

        const updatedUser = await client.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            firstName,
            lastName,
            username,
            email,
            bio,
            ...(newHashedPassword && { password: newHashedPassword }),
          },
        });
        if (!updatedUser) {
          return {
            ok: false,
            error: "Could not update the profile.",
          };
        }
        return {
          ok: true,
        };
      }
    ),
  },
};
