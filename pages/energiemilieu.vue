<template>
  <div>
    <introVideo
      :id="json.expertises.energiemilieu.id"
      :url="json.expertises.energiemilieu.video"
      :title="json.expertises.energiemilieu.intro.title"
      :text="json.expertises.energiemilieu.intro.text"
    />
    <div class="container my-5">
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Isoleren en Ventileren
        </h4>
        <p>
          Als energieadviseur wil Proveko ook uw bouw- of renovatiedossier helpen sturen in de bepaling van de juiste
          soort en dikte isolatie, aansturen op gebied van ventilatie en luchtdicht bouwen.
        </p>
      </div>
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Niet alle waters zijn afvalwater…
        </h4>
        <p>
          Waterbehandeling alsook optimaal gebruiken van regenwater behoort tot onze expertise. Ook voor afvalwaterbeheer
          kan u bij ons terecht voor nazicht van uw rioleringsplan of voor de aanstelling als erkend keurder
          privé-riolering.
        </p>
      </div>

      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Afkoppelingsprojecten
        </h4>
        <p>
          Komt er een afkoppelingsproject in jouw straat, sla niet in paniek maar kom even met ons praten. We kijken samen
          voor de meest economische en aanvaarde oplossing waarbij wij de communicatie voor u kunnen voeren met het
          bestuur of afkoppelingsverantwoordelijke.
        </p>
      </div>

      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Elektrische, Sanitaire of Gaskeuring nodig?
        </h4>
        <p>
          Heeft u aanpassingen gemaakt aan uw bestaande elektrische installatie of deze in je nieuwbouw afgewerkt?
          Is uw sanitaire installatie (toevoer) afgewerkt maar nog niet gekeurd voor de watermaatschappij?
          Hebt u nog een keuring gasinstallatie of lekdichtheidstest nodig?
          Contacteer ons voor het juiste keuringsattest.
        </p>
      </div>
    </div>
    <CallToAction
      cta="Op zoek naar een technisch raadsman in jouw energiedossier?"
      text="Contacteer ons vrijblijvend of wij ook voor u kunnen optreden."
    />    <contact />
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
