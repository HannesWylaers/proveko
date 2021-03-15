<template>
  <div>
    <introVideo
      :id="json.expertises.bouwcoordinatie.id"
      :url="json.expertises.bouwcoordinatie.video"
      :title="json.expertises.bouwcoordinatie.intro.title"
      :text="json.expertises.bouwcoordinatie.intro.text"
    />
    <div class="container my-5">
      <div class="row">
        <div class="col-md-8">
          <div>
            Door de jaren heen kon hij zich opwerken tot projectleider
            en heeft hij alle knopen van het vak geleerd en alle bouwprocessen geleid
            in een goede verstandhouding tussen aannemer, architect en bouwheer.
          </div>
          <div class="my-4">
            Ook via Proveko wil Koen de juiste schakel zijn in jouw bouwproces.
            Neem daarvoor vrijblijvend contact met ons op en weet dat u in een samenwerking met Proveko kan rekenen op …<br>
          </div>
          <div class="my-4">
            <strong>P</strong>rofessioneel advies<br>
            <strong>R</strong>aadgeving moderne techniek en energie<br>
            <strong>O</strong>ntwerp tot oplevering<br>
            <strong>V</strong>aste partners<br>
            <strong>E</strong>erlijke en persoonlijke inzet<br>
            <strong>K</strong>orte uitvoeringstermijn<br>
            <strong>O</strong>pvolging op de werf<br>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center col mb-3">
            <div class="card-body">
              <p class="card-text">
                Meer weten over bouwcoordinatie voor particulieren?
              </p>
              <b-button
                class="text-center mb-0"
                variant="primary"
                href="/bouwcoordinatie-particulieren">
                Lees meer
              </b-button>
            </div>
          </div>
          <div class="card col text-center">
            <div class="card-body">
              <p class="card-text text-center">
                Meer weten over bouwcoordinatie voor architecten, promotoren en (bouw)bedrijven?
              </p>
              <b-button
                class="text-center mb-0"
                variant="primary"
                href="/bouwcoordinatie-ondernemingen">
                Lees meer
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CallToAction
      cta="De kunst uw bouwdromen te begrijpen… de kennis ze te realiseren"
      text="Contacteer ons snel voor een eerste babbel en laat ons samen zien wat we voor elkaar kunnen betekenen."
    />
    <Contact />
    <Footer />
  </div>
</template>
<script>
import { BButton } from 'bootstrap-vue';
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
    BButton,
  },
  data() {
    return {
      json: dbData,
    };
  },
};
</script>
