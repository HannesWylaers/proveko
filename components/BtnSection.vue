<template>
  <div class="container py-4 row">
    <div class="card text-center col mr-3">
      <div class="card-body">
        <p class="card-text">
          Meer weten over bouwcoordinatie voor particulieren?
        </p>
      <a
        href="bouwcoordinatie-particulieren"
        class="btn btn-primary">
        Lees meer
      </a>
      </div>
    </div>
    <div class="card col text-center">
      <div class="card-body">
        <p class="card-text text-center">
          Meer weten over bouwcoordinatie voor Architecten / Promotoren / (Bouw)bedrijven?
        </p>
        <a
          href="bouwcoordinatie-niet-particulieren"
          class="btn btn-primary text-center">
          Lees meer
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cta: {
      type: String,
      default: ' ',
    },
    text: {
      type: String,
      default: ' ',
    },
    text2: {
      type: String,
      default: ' ',
    },
  },
};
</script>
<style scoped lang="scss">
  .btn-primary {
    border: 1px solid white;
    background-color: #1E88AA;
  }
</style>
