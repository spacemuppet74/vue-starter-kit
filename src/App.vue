<template>
<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        <i class="far fa-thumbs-up"></i>
        <h1>{{ title }}</h1>
      </h1>
      <h2 class="subtitle">
          <h2>{{ time.toLocaleString() }} </h2>
      </h2>
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
@import "./assets/sass/main.scss";
</style>

