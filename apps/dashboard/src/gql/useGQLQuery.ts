import { gql, useQuery } from "@apollo/client";
import type { Query } from "@favware/graphql-pokemon";
import { client } from "../apolloClient";
import { GET_ALL_POKEMONS } from "./getAllPokemons";

export interface GraphQLPokemonResponse<K extends keyof Omit<Query, "__typename">> {
  data: Record<K, Omit<Query[K], "__typename">>;
}

console.log(GET_ALL_POKEMONS);

export const useGQLQuery = (key: keyof Omit<Query, "__typename">, query: any, variables?: any) => {
  return useQuery<GraphQLPokemonResponse<"getPokemon">>(
    gql`
      query{
        ${GET_ALL_POKEMONS}
      }
    `
  );
  //return { data, loading, error };
};

// export const useGQLQuery = fetch("https://graphqlpokemon.favware.tech/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     query: `
//     {
//       ${GET_ALL_POKEMONS}
//     }
//     `
//   })
// })
//   .then((res) => res.json() as Promise<GraphQLPokemonResponse<"getPokemon">>)
//   .then((json) => console.log(json.data));
