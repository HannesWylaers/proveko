<template>
  <div>
    <navbar />
    <slideshow />
    <expertises />
    <callToAction />
    <contact />
  </div>
</template>

<script>
import navbar from '../components/Navbar.vue'
import expertises from '../components/Expertises.vue'
import slideshow from '../components/Slideshow.vue'
import callToAction from '../components/Calltoaction.vue'
import contact from '../components/Contact.vue'

export default {
  components: {
    navbar,
    expertises,
    slideshow,
    callToAction,
    contact
  }
}
</script>
