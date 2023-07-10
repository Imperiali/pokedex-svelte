<script>
  export let data
</script>

<div class="pokemon">
  <h2>{data.pokemon.name}</h2>
  <img src={data.pokemon.sprites.front_default} alt="pokemon image">
</div>

<style>
  .pokemon {
      margin-top: 40px;
      padding: 10px;
      border: 1px dotted rgba(255, 255, 255, 0.2);
  }
</style>