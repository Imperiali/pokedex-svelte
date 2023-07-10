<script>
  import Title from '$lib/title/index.svelte'
  import '../../styles/global.css'
</script>

<header>
  <nav>
    <Title title="Pokedex in Svelte"/>
    <div class="links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/pokemons">Pokemons</a>
    </div>
  </nav>
</header>

<main>
  <slot/>
</main>

<footer>
  <p>Copyright 2023 Pokedex in Svelte</p>
</footer>

<style>
    header {
        text-align: center;
        background: rgba(0, 0, 0, 0.1);
    }

    main {
        max-width: 960px;
        margin: 20px auto;
    }

    footer {
        text-align: center;
    }

    .links {
        margin-left: auto;
    }

    a {
        margin-left: 10px;
    }

    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0 auto;
    }
</style>