<template>
  <div>
    <introVideo
      :id="json.expertises.plaatsbeschrijving.id"
      :title="json.expertises.plaatsbeschrijving.intro.title"
      :text="json.expertises.plaatsbeschrijving.intro.text"
      :url="json.expertises.plaatsbeschrijving.video"
    />
    <div class="container my-5">
      <div class="row">
        <div class="card text-center col mr-3">
          <div class="card-body">
            <p class="card-text">
              Meer weten over plaatsbeschrijving voor bouw?
            </p>
            <a
              href="/plaatsbeschrijving-bouw"
              class="btn btn-primary"
            >
              Lees meer
            </a>
          </div>
        </div>
        <div class="card col text-center">
          <div class="card-body">
            <p class="card-text text-center">
              Meer weten over plaatscheschrijving voor huur?
            </p>
            <a
              href="/plaatsbeschrijving-huur"
              class="btn btn-primary text-center"
            >
              Lees meer
            </a>
          </div>
        </div>
      </div>
    </div>
    <CallToAction
      cta="Vanuit onze expertise als docent plaatsbeschrijving kunnen wij morgen ook uw dossier opmaken."
      text="Contacteer ons snel voor een eerste babbel en laat ons samen zien wat we voor elkaar kunnen betekenen."/>
    <Contact />
    <Footer />
  </div>
</template>
<script>
import Contact from '../layouts/ContactFooter.vue';
import CallToAction from '../components/Calltoaction.vue';
import Footer from '../components/Footer.vue';
import introVideo from '../components/introVideo.vue';
import dbData from '../assets/db-data.json';

export default {
  components: {
    Contact,
    CallToAction,
    Footer,
    introVideo,
  },
  data() {
    return {
      json: dbData,
    };
  },
  computed: {
    plaatsBeschrijvingSubs() {
      console.log('this.json.nav.children.name', this.json.nav.children);
      return (this.json.nav.children.name === 'plaatsbeschrijving');
    },
  },
};
</script>
