import { useQuery } from "react-query";
import type { Query } from "@favware/graphql-pokemon";
import { GraphQLClient } from "graphql-request";

const API_URL = "https://graphqlpokemon.favware.tech/";

export interface GraphQLPokemonResponse<K extends keyof Omit<Query, "__typename">> {
  data: Record<K, Omit<Query[K], "__typename">>;
}

export const useReactQuery = (key: any, query: any, variables: any, config = {}) => {
  const graphQLClient = new GraphQLClient(API_URL, {});

  const fetchData = async () => await graphQLClient.request(query, variables);

  return useQuery(key, fetchData, config);
};
