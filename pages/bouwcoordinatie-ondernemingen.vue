<template>
  <div>
    <introVideo
      :id="json.expertises.bouwcoordinatienietparticulier.id"
      :url="json.expertises.bouwcoordinatienietparticulier.video"
      :title="json.expertises.bouwcoordinatienietparticulier.intro.title"
      :text="json.expertises.bouwcoordinatienietparticulier.intro.text"
      :text2="json.expertises.bouwcoordinatienietparticulier.intro.text2"
    />
    <div class="container my-5">
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Site supervisie en werfopvolging
        </h4>
        <p>
          Sinds 2002 voert Proveko werfopvolging uit van ruwbouw tot totaalafwerking.
          Dit gaat van aansturen van binnen- en buitenlandse werfkrachten in de ruwbouw
          en afwerkingsfase over werfplanning, opmaak uitvoeringstekeningen, budgetopvolging, prijsvraag
          en -vergelijking, coördinatie onderaannemers in alle werffases, controle vorderingstaten,
          oplevering en nazorg.
        </p>
      </div>
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Onze troeven als bouwcoördinator
        </h4>
        <p>
          Reeds jaren kunnen alle partners die samenwerkten met Proveko rekenen op een maximale
          service en klantvriendelijkheid. Zowel met de opdrachtgevers als met de bouwpartners
          hebben we doorheen de jaren zeer mooie relaties opgebouwd.
          Met een groot pakket aan kennis en knowhow nemen wij de totaalopvolging op ons en communiceren
          op vaste tijdstippen over de stand van zaken met onze klanten.
        </p>
      </div>
    </div>
    <CallToAction
      cta="Win morgen tijd in je bouwproject door vandaag al eens je plannen open te vouwen met ons."
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
