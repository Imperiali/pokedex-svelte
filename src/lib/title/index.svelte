<script>
  export let title = "Pokedex"
</script>

<div class="title">
  <img width="50" height="50" src="/pokedex-logo.png" alt="site logo">
  <h1>{title}</h1>
</div>

<style>
  .title {
      display: flex;
      align-items: center;
  }
  .title img {
      display: inline-block;
      filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
  }
  .title h1 {
      margin-left: 10px;
  }
</style>