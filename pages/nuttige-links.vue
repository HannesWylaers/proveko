<template>
  <div>
    <div class="container my-5">
      <Title :title="'Nuttige links'" />
      <div class="my-4">
        <a href="https://www.woninghuur.vlaanderen/huurdecreet-vanaf-01012019" target="_blank">
          Huurdecreet 2019<img style="width: 16px; height: 16px;" src="../assets/icons/launch-primary.svg" /></a>
        <p>
          Per 1 januari 2019 dient u als huurder en verhuurder rekening te houden met vernieuwde huurwetgeving
          voor contracten residentiële huur.  Beide partijen worden hierin gewezen op nieuwe regels, rechten en plichten.
          Ook kan u via deze link doorklikken naar ‘Publicaties’ voor het downloaden van de volledige PDF bundel.
          Zit u met blijvende vragen, aarzel niet onze te contacteren voor verdere hulp.
        </p>
      </div>
      <div  class="my-4">
        <a href="/Proveko-checklist-uittrede-huur2020.pdf" target="_blank">
          Checklist huuruittrede<img style="width: 16px; height: 16px;" src="../assets/icons/launch-primary.svg" /></a>
        <p>
          Komt u binnenkort in contact met een uittrede huur en wenst u het huurpand op een juiste manier klaar
          te maken voor huuruittrede? Wij hebben voor u een checklist beschikbaar waarin u per ruimte kan nagaan
          dewelke de belangrijkste bij te werken punten zijn en/of wat er ten laste is van de huurder.
          Ook info met betrekking tot attesten, reiniging en sleuteloverdracht wordt erin vermeld.
        </p>
      </div>
    </div>
    <CallToAction
      cta="Nog andere vragen of problemen, bel ons GRATIS voor een eerste telefonische bespreking van jouw probleem of eventuele opdracht?"
      text="Contacteer ons vrijblijvend of wij ook voor jouw dossier kunnen optreden."
    />
    <contact />
    <Footer />
  </div>
</template>

<script>
import Contact from '../layouts/ContactFooter.vue';
import CallToAction from '../components/Calltoaction.vue';
import Footer from '../components/Footer.vue';
import Title from '../components/Title.vue';

export default {
  components: {
    Contact,
    CallToAction,
    Footer,
    Title,
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
