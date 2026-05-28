import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    type Book {
        title: String
        subtitle: String
        publisher: String
        description: String
        }
    type Query {
        books: [Book]
    }
`;

const resolvers = {
  Query: {
    books: () => {
      return [
        {
          title: "The Awakening",
          subtitle: "A Novel",
          publisher: "Harper & Brothers",
          description: "The story of India",
        },
      ];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function init() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 8000 },
  });
  console.log(`Server is running on url ${url}`);
}

init();
