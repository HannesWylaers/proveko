<template>
  <div>
    <navbar />
    <slideshow />
    <expertises />
    <calltoaction />
  </div>
</template>

<script>
import navbar from '../components/Navbar.vue'
import expertises from '../components/Expertises.vue'
import slideshow from '../components/Slideshow.vue'
import calltoaction from '../components/Calltoaction.vue'
export default {
  components: {
    navbar,
    expertises,
    slideshow,
    calltoaction
  }
}
</script>
<style lang="scss">
@import '../assets/variables.scss';
</style>
