import { gql, useQuery } from "@apollo/client";
import type { Query } from "@favware/graphql-pokemon";

export interface GraphQLPokemonResponse<K extends keyof Omit<Query, "__typename">> {
  data: Record<K, Omit<Query[K], "__typename">>;
}

export const useGQLQuery = (key: keyof Omit<Query, "__typename">, query: any, variables?: any) => {
  return useQuery<GraphQLPokemonResponse<typeof key>>(
    gql`
      query{
        ${query}
      }
    `,
    variables
  );
};
