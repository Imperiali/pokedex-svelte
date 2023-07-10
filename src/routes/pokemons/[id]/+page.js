import { redirect } from "@sveltejs/kit";

export async function load({fetch, params}) {
  await new Promise(resolve => setTimeout(resolve, 1000))
  const {id} = params
  
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await res.json()
  
    if (res.ok) {
      return {
        pokemon
      }
    }
  } catch (e) {
    throw redirect(307, '/pokemons')
  }
}