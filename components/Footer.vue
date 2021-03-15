<template>
  <div class="container py-3 d-flex">
    © Proveko {{ getFullYear }}
  </div>
</template>
<script>

export default {
  computed: {
    getFullYear() {
      const d = new Date();
      return d.getFullYear();
    },
  },
};
</script>
