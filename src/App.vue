<template>
<div class="jumbotron">
  <h1 class="display-4">
    {{ title }}
  </h1>
  <p class="lead">If you see this message, everything is up and running</p>
  <hr class="my-4">
  <p>{{time.toLocaleString()}}</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
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
  @import './assets/sass/_custom.scss';
  @import '~bootstrap/scss/bootstrap.scss';
</style>
