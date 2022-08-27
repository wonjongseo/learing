import { ApolloServer, gql } from "apollo-server";
import fetch from "node-fetch";
let tweets = [
  {
    id: "1",
    text: "hello",
    userId: "2",
  },
  {
    id: "2",
    text: "hello2",
    userId: "1",
  },
];
const users = [
  { id: "1", firstName: "a1", lastName: "l1" },
  { id: "2", name: "b1", lastName: "l2" },
];

/**
 *   type Query {
    allMovies: [Movie!]!
    allUser: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    movie(id: String!): Movie
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
 * 
 */
const resolvers = {
  Query: {
    allTweets() {
      return tweets;
    },

    allUser() {
      console.log("allUsers called");
      return users;
    },
    tweet(_, { id }) {
      return tweets.find((tweet) => tweet.id === id);
    },
    async allMovies() {
      const r = await fetch("https://yts.mx/api/v2/list_movies.json");
      const json = await r.json();
      return json.data.movies;
    },

    async movie(_, { id }) {
      const r = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await r.json();
      return json.data.movie;
    },
  },
  Mutation: {
    postTweet(_, { text, userId }) {
      const newTweets = {
        id: tweets.length + 1,
        text,
        userId,
      };
      tweets.push(newTweets);
      return newTweets;
    },
    deleteTweet(_, { id }) {
      const tweet = tweets.find((t) => t.id === id);
      if (!tweet) return false;
      tweets = tweets.filter((t) => t.id !== id);
      return true;
    },
  },
  User: {
    fullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
  Tweet: {
    author({ userId }) {
      return users.find((user) => user.id === userId);
    },
  },
};

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String
    """
    Hello
    """
    fullName: String!
  }
  type Tweet {
    id: ID!
    text: String!
    author: User
  }
  type Movie {
    id: Int!
    url: String!
    imdb_code: String!
    title: String!
    title_english: String!
    title_long: String!
    slug: String!
    year: Int!
    rating: Float!
    runtime: Float!
    genres: [String]!
    summary: String
    description_full: String!
    synopsis: String
    yt_trailer_code: String!
    language: String!
    background_image: String!
    background_image_original: String!
    small_cover_image: String!
    medium_cover_image: String!
    large_cover_image: String!
  }
  type Query {
    allMovies: [Movie!]!
    allUser: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
    movie(id: String!): Movie
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;
const server = new ApolloServer({ resolvers, typeDefs });
// const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Running on ${url}`));
