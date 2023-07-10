<script>
  import Title from '$lib/title/index.svelte'
  import '../../styles/global.css'
</script>

<header>
  <Title title="Pokedex in Svelte"/>
</header>

<main>
  <slot />
</main>

<footer>
  <p>Copyright 2023 Pokedex in Svelte</p>
</footer>

<style>
  header {
      display: flex;
      justify-content: center;
  }
  main {
      max-width: 960px;
      margin: 20px auto;
  }
  footer {
      text-align: center;
  }
</style>