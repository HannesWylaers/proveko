<template>
  <div>
    <div class="container my-5">
      <Title :title="'Expertises'"></Title>
      <Expertises />
    </div>
    <CallToAction />
    <contact />
    <Footer />
  </div>
</template>

<script>
import Contact from '../layouts/ContactFooter.vue';
import CallToAction from '../components/Calltoaction.vue';
import Footer from '../components/Footer.vue';
import Expertises from '../components/Expertises.vue';

export default {
  components: {
    Contact,
    CallToAction,
    Footer,
    Expertises,
  },
  data() {
    return {
      intro: {
        title: 'Expertises',
      },
    };
  },
};
</script>
