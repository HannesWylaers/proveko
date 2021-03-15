<template>
  <div>
    <introVideo
      :id="json.expertises.vastgoedexpertise.id"
      :url="json.expertises.vastgoedexpertise.video"
      :title="json.expertises.vastgoedexpertise.intro.title"
      :text="json.expertises.vastgoedexpertise.intro.text"
    />
    <div class="container my-5">
      <p>Met 18 jaar ervaring in de aannemers- en expertisewereld kunt u Proveko eveneens inschakelen voor
      </p>
      <ul>
        <li>bemiddeling voor bouwproblemen, schadegevallen;</li>
        <li>opvolging van schadedossiers;</li>
        <li>vertegenwoordiging van de opdrachtgever bij expertise;</li>
        <li>bijstand voorlopige oplevering.</li>
      </ul>
    </div>
    <CallToAction
      cta="Hebt u een bouwkundig probleem en wil u nog niet onmiddellijk naar een advocaat stappen?"
      text="Contacteer ons vrijblijvend of wij ook voor jouw dossier kunnen optreden."
    />
    <contact />
    <Footer />
  </div>
</template>
Vastgoedexpertise
<script>
import introVideo from '../components/introVideo.vue';
import Contact from '../layouts/ContactFooter.vue';
import CallToAction from '../components/Calltoaction.vue';
import Footer from '../components/Footer.vue';
import dbData from '../assets/db-data.json';

export default {
  components: {
    introVideo,
    Contact,
    CallToAction,
    Footer,
  },
  data() {
    return {
      json: dbData,
    };
  },
};
</script>
