import {error} from "@sveltejs/kit";

export async function load({fetch}) {
  const res = await fetch('/pokemons/api')
  const pokemons = await res.json()
  
  if (res.ok) {
    return {
      pokemons
    }
  }
  
  throw error(res.status, 'Deu ruim')
}