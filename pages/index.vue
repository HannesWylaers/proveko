<template>
  <div>
    <slideshow />
    <expertises />
    <calltoaction />
  </div>
</template>

<script>
import expertises from '../components/Expertises.vue'
import slideshow from '../components/Slideshow.vue'
import calltoaction from '../components/Calltoaction.vue'

export default {
  components: {
    expertises,
    slideshow,
    calltoaction
  }
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
</style>
