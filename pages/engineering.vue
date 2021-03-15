<template>
  <div>
    <introVideo
      :id="json.expertises.engineering.id"
      :url="json.expertises.engineering.video"
      :title="json.expertises.engineering.intro.title"
      :text="json.expertises.engineering.intro.text"
    />
    <div class="container my-5">
      <div class="my-4">
        Met 18 jaar ervaring in de aannemerswereld kunt u Proveko eveneens inschakelen als bouwadviseur voor
        <ul>
          <li class="font-weight-strong">
            CAD tekenburo:
          </li>
          <ul>
            <li>Technisch advies en uitwerken constructiedetails bouwwerken;</li>
            <li>Analyse prefab in uitvoeringsfase en opmaak prefab tekeningen in CAD versie;</li>
            <li>Uitvoeringsplannen bouw & techniek;</li>
            <li>Opmaak van uitvoeringsmeetstaten;</li>
            <li>3D ontwerp;</li>
            <li>Bestel- en uitvoeringsplanning;</li>
            <li>Eindafrekeningen;</li>
            <li>Opmaak verkoopsplannen.</li>
          </ul>
          <li class="font-weight-strong">
            Budgetteren van de te verwachten bouw- of renovatiekosten aan uw woning, 2de verblijf, verhuurpand, etc.
          </li>
          <li class="font-weight-strong">
            Advies en begeleiding, opmaak stappenplan en begeleiding bij aankoop of bouwwerken.
          </li>
        </ul>
      </div>
    </div>
    <CallToAction
      cta="Handen te kort voor jouw teken- en rekenwerk in het komende project?"
      text="Contacteer ons vrijblijvend of wij ook voor jouw dossier kunnen optreden."
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
