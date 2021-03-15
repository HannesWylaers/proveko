<template>
  <div>
    <div class="container my-5">
      <Title :title="'Referenties'"></Title>
      <Referenties />
      <Title :title="'Getuigenissen'"></Title>
      <Testimonial />
    </div>
    <CallToAction
      cta="Bel ons vandaag voor jouw project van morgen en wordt ook 1 van onze tevreden partners!"
      text="Contacteer ons snel voor een eerste babbel en laat ons samen zien wat we voor elkaar kunnen betekenen." />
    <contact />
    <Footer />
  </div>
</template>

<script>
import Contact from '../layouts/ContactFooter.vue';
import CallToAction from '../components/Calltoaction.vue';
import Footer from '../components/Footer.vue';
import Referenties from '../components/Referenties.vue';
import Testimonial from '../components/Testimonial.vue';
import Title from '../components/Title.vue';

export default {
  components: {
    Contact,
    CallToAction,
    Footer,
    Referenties,
    Title,
    Testimonial,
  },
  data() {
    return {
      intro: {
        title: 'Referenties',
      },
    };
  },
};
</script>
