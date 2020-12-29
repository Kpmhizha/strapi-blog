import gql from "graphql-tag"; // This package provides logic for parsing GraphQL queries.

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
    }
  }
`;

export default CATEGORIES_QUERY;