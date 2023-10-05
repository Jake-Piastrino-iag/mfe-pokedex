import { gql } from "@apollo/client";
import PokemonList from "../../assets/pokemonlist.json";

const query = PokemonList.map(
  (pokemon) =>
    `${pokemon.toLowerCase()}:getPokemon(pokemon: ${pokemon.toLowerCase()} reverseFlavorTexts: true takeFlavorTexts: 1) {
		num
		species
		types
		abilities { first hidden second }
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

export const GET_ALL_POKEMONS = query.slice(0, 26).toString();
