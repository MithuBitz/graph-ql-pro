import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";

const typeDefs = `#graphql

    type Author {
        name: String,
        email: String,
    }

    type Book {
        title: String
        subtitle: String
        publisher: String
        description: String
        author: Author
        }
    type Query {
        books: [Book]
        authors: [Author]
    }
`;

const resolvers = {
  Query: {
    books: async () => {
      const { data } = await axios.get(
        "https://api.freeapi.app/api/v1/public/books",
      );

      return data.data.data.map((book) => ({
        title: book.volumeInfo.title,
        subtitle: book.volumeInfo.subtitle,
        publisher: book.volumeInfo.subtitle,
        description: book.volumeInfo.description,
        author: {
          name: book.volumeInfo.authors[0],
        },
      }));

      //   return [
      //     {
      //       title: "The Awakening",
      //       subtitle: "A Novel",
      //       publisher: "Harper & Brothers",
      //       description: "The story of India",
      //     },
      //   ];
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
