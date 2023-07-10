<script>
  import { page } from '$app/stores';
</script>

<div class="error">
  <h2>Oooops</h2>
  <p>{$page.status}</p>
  <p>{$page.error.message}</p>

  <a href="/pokemons">Vai pros pokemons</a>
</div>

<style>
  .error {
      text-align: center;
      margin-bottom: 60px;
  }
</style>