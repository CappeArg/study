import { PokemonsGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPockemons = async (limit=20, offset=0 ): Promise<SimplePokemon[]>=> {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res => res.json())

  const pokemons = data.results.map(pokemon => ({
      id: pokemon.url.split('/').slice(-2)[0],
      name: pokemon.name,
  }))

  // throw new Error ('Esto es un error que no debería ocurrir')

  return pokemons 
}

export default async function PokemonsPage() {

  const pokemons = await getPockemons(160);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokemons <small>estático</small></span>
      <PokemonsGrid pokemons={pokemons}/>
    </div>
  );
}