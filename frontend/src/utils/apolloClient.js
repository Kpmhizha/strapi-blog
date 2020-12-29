import { ApolloClient, InMemoryCache } from '@apollo/client';
//This single package contains virtually everything you need to set up Apollo Client. 
//It includes the in-memory cache, local state management, error handling, and a React-based view layer.
// import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;