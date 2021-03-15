<template>
  <div>
    <slideshow />
    <expertises />
    <introVideo
      :id="intro.id"
      :title="intro.title"
      :text="intro.text"
      :text2="intro.text2"
      :url="intro.url"
      class="bg-primary my-3"
    />
    <div class="container">
      <Title :title="'Referenties'"></Title>
      <Referenties />
    </div>
    <CallToAction
      cta="Bel ons vandaag nog en krijg vrijblijvend en helemaal GRATIS jouw eerste advies!"
    />
    <contact />
    <Footer />
  </div>
</template>

<script>
import expertises from '../components/Expertises.vue';
import slideshow from '../components/Slideshow.vue';
import introVideo from '../components/introVideo.vue';
import contact from '../layouts/ContactFooter.vue';
import Footer from '../components/Footer.vue';
import Referenties from '../components/Referenties.vue';
import CallToAction from '../components/Calltoaction.vue';
import Title from '../components/Title.vue';

export default {
  components: {
    expertises,
    slideshow,
    contact,
    Footer,
    introVideo,
    Referenties,
    CallToAction,
    Title,
  },
  data() {
    return {
      intro: {
        title: 'Wie is Proveko?',
        text:
          'Proveko is een jong team met een rijke ervaring en kennis in de bouwsector. Deze gaat van werfvoorbereiding, '
          + 'projectleiding, budgetcontrole en planning tot expertisetechnieken, energie en milieu alsook opleiding. '
          + 'Onze jarenlange ervaring op en rond de werkvloer geeft ons de mogelijkheid om elke bouwpartner '
          + 'bij te staan van ontwerpfase doorheen de uitvoering, tot en met oplevering. ',
        text2: 'Naast projectbegeleiding hebben wij onze expertise verruimd met locatieve '
          + 'en bouwkundige plaatsbeschrijvingen alsook vastgoedexpertises tijdens of na uitvoering der werken. '
          + 'Met onze opgebouwde kennis over energie en milieu is het een verrijking om ook voor u veiliger, '
          + 'duurzamer en mooier te gaan bouwen in nieuwbouw en renovatie. '
          + 'Wij kijken ernaar uit om u als persoon of team te kunnen ondersteunen.',
        url: 'https://www.youtube.com/embed/h5Ea2d5M5t0',
      },
    };
  },
};
</script>
<style lang="scss">
@import '../assets/scss/variables';
</style>
