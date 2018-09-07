<template>
<section class="section">
  <div class="container">
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle">
          {{ time }}
        </h2>
      </div>
    </div>
  </div>
  </div>
</section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Up and running",
      time: new Date()
    };
  }
};
</script>

<style scoped>
</style>

<style lang="scss">
</style>
