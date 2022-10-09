import dotenv from "dotenv";
dotenv.config();

import { ApolloServer, gql } from "apollo-server";
import { resolvers, typeDefs } from "./schema";
import { getUser } from "./users/users.utils";
import express from "express";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
    };
  },
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log(`🚀 Server is running on http://localhost:${PORT}/`));
