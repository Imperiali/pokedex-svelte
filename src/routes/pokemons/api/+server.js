import {json} from "@sveltejs/kit";

export function GET() {
  const pokemons = [
    {
      name: 'bulbasaur'
    },
    {
      name: 'ivysaur'
    },
    {
      name: 'venosaur'
    }
  ]
  
  return json(pokemons)
}