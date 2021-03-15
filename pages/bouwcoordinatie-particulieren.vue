<template>
  <div>
    <introVideo
      :id="json.expertises.bouwcoordinatieparticulier.id"
      :url="json.expertises.bouwcoordinatieparticulier.video"
      :title="json.expertises.bouwcoordinatieparticulier.intro.title"
      :text="json.expertises.bouwcoordinatieparticulier.intro.text"
      :text2="json.expertises.bouwcoordinatieparticulier.intro.text2"
    />
    <div class="container my-5">
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Wij bouwen met u en binnen uw budget
        </h4>
        <p>
          Vinden we daarna samen de juiste klik, gaan we graag verder in de budgettering, werfvoorbereiding,
          bestel/keuzeplanning, aanstelling van de partners, werfplanning, …
          Dit telkens in een blijvende open communicatie doorheen het project tussen
          jou als bouwheer, onszelf en onze vaste partners of de door u gekozen aannemers.
          Naast de planning op de werf die wij beheren zullen we ook jou als bouwheer doorheen de planning leiden
          voor het tijdig maken van de materiaalkeuzes, telkens met het nodige advies en raadgeving m.b.t.
          moderne techniek en energie.
        </p>
      </div>
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Kwaliteit en planning staan centraal
        </h4>
        <p>
          Wij blijven voor u het aanspreekpunt bij eventuele vragen of moeilijkheden, staan in voor de controle
          van vorderingstaten en kwalitatieve afwerking tot en met de oplevering.
          Via uw persoonlijke Cloud hebt u ook toegang tot alle documenten.
        </p>
      </div>
    </div>
    <CallToAction
      cta="Zijn jouw bouwplannen klaar en wil je zo snel mogelijk van start kunnen gaan?"
      text="Contacteer ons snel voor een eerste babbel en laat ons samen zien wat we voor elkaar kunnen betekenen."
    />
    <Contact />
    <Footer />
  </div>
</template>
<script>
import introVideo from '../components/introVideo.vue';
import Contact from '../layouts/ContactFooter.vue';
import CallToAction from '../components/Calltoaction.vue';
import Footer from '../components/Footer.vue';
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
