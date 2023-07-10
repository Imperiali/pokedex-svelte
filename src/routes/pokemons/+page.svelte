<script>
  export let data
</script>

<div class="pokemons">
  <ul>
    {#each data.pokemons as pokemon}
      <li>
        <a sveltekit:prefetch href={`/pokemons/${pokemon.name}`}>{pokemon.name}</a>
      </li>
    {/each}
  </ul>
</div>

<style>
    .pokemons {
        margin-top: 20px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    a {
        display: inline-block;
        margin-top: 10px;
        padding: 10px;
        border: 1px dotted rgba(255, 255, 255, 0.2);
    }
</style>