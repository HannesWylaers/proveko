<template>
  <div>
    <div class="container my-5 pb-2">
      <Title :title="'Contact'" />
      <div class="row w-100 mb-3 py-3">
        <div class="col-sm">
          <Maps />
        </div>
        <div class="col-sm">
          <div class="mb-3">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
    <CallToAction
      cta="Vraag nu een vrijblijvende offerte op!"
      text="Contacteer ons snel voor een eerste babbel en laat ons samen zien wat we voor elkaar kunnen betekenen."
    />
    <ContactFooter />
    <Footer />
  </div>
</template>
<script>
import Maps from '../components/Maps.vue';
import ContactInfo from '../components/ContactInfo.vue';
import ContactFooter from '../layouts/ContactFooter.vue';
import CallToAction from '../components/Calltoaction.vue';
import Footer from '../components/Footer.vue';
import Title from '../components/Title.vue';
import dbData from '../assets/db-data.json';

export default {
  components: {
    Maps,
    ContactInfo,
    ContactFooter,
    CallToAction,
    Footer,
    Title,
  },
  data() {
    return {
      intro: {
        id: 'contact',
        title: 'Contact',
      },
      json: dbData,
    };
  },
};
</script>
<style lang="scss">
  .app-contact {
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>
