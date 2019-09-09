<template>
  <div>
    <navbar />
    <nuxt />
    <expertises />
    <slideshow />
  </div>
</template>
<script>
import navbar from '../components/Navbar.vue'
import expertises from '../components/Expertises.vue'
import slideshow from '../components/Slideshow.vue'

export default {
  components: {
    navbar,
    expertises,
    slideshow
  }
}
</script>
