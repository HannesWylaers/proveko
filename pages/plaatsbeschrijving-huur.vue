<template>
  <div>
    <introVideo
      :id="json.expertises.plaatsbeschrijvingHuur.id"
      :url="json.expertises.plaatsbeschrijvingHuur.video"
      :title="json.expertises.plaatsbeschrijvingHuur.intro.title"
      :text="json.expertises.plaatsbeschrijvingHuur.intro.text"
    />
    <div class="container my-5">
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Word jij binnenkort een nieuwe huurder?
        </h4>
        <p>
          Neem dan geen risico en laat een zeer gedetailleerde plaatsbeschrijving opmaken
          met het duidelijk noteren van alle eventuele gebreken en tekorten.
          Laat deze tegensprekelijk opstellen of laat u voldoende informeren of bijstaan
          als u het zelf zou willen doen.
        </p>
      </div>
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Word jij binnenkort een nieuwe verhuurder?
        </h4>
        <p>
          Neem dan geen risico en laat een zeer gedetailleerde plaatsbeschrijving opmaken
          met het duidelijk noteren van de staat van elk lokaal apart van kop tot teen.
          Niemand wil als verhuurder na 1, 3 of 9 jaar een huis dat uitgeleefd, niet onderhouden of niet verzorgd is geweest.
          Laat deze tegensprekelijk opstellen of laat u voldoende informeren of bijstaan als u het zelf zou willen doen
        </p>
      </div>
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Zit jouw huurdossier er binnenkort op?
        </h4>
        <p>
          Misschien heeft u destijds beroep gedaan op Proveko voor de plaatsbeschrijving,
          maar misschien ook niet. In beide gevallen kunnen wij altijd helpen.
        </p>
      </div>
    </div>
    <CallToAction
      cta="Slaap de volledige huurperiode op beide oren, wij zorgen voor perfecte start en comfortabel afsluiten."
      text="Contacteer ons vrijblijvend of wij ook kunnen optreden als expert plaatsbeschrijvingen in jouw huurdossier."
    />
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
};
</script>
