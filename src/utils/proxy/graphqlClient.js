import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import fetch from 'cross-fetch'

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:3000/api",
  fetch,
});

export const client = new ApolloClient({
  cache,
  link,
});