//import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { GraphQLClient } from "graphql-request";

const uri = "http://localhost:3030/graphql";
/* const client = new ApolloClient({
  uri: "http://localhost:3030/graphql"
}); */

const client = new GraphQLClient(uri, { cache: "no-cache" });
const clientWithCache = new GraphQLClient(uri, { cache: "default" });

export { client, clientWithCache, gql };
