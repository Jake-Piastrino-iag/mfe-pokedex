import { gql } from "graphql-request";
import PokemonList from "../../assets/pokemonlist.json";

const query = PokemonList.map(
  (pokemon) =>
    `${pokemon}:getPokemon(pokemon: ${pokemon} reverseFlavorTexts: true takeFlavorTexts: 1) {
		num
		species
		types
		abilities { first second hidden }
		baseStats { hp attack defense specialattack specialdefense speed }
		gender { male female }
		height
		weight
		flavorTexts { game flavor }
		evYields { hp attack defense specialattack specialdefense speed }
		isEggObtainable
		minimumHatchTime
		maximumHatchTime
		levellingRate
		sprite
		shinySprite
		backSprite
		shinyBackSprite
		smogonTier
		smogonPage
		serebiiPage
		bulbapediaPage
	}`
);

console.log(query);

export const GET_ALL_POKEMONS = gql`
query{
    ${query.toString()}
}
`;
