<template>
  <div>
    <introVideo
      :id="json.expertises.plaatsbeschrijvingBouw.id"
      :url="json.expertises.plaatsbeschrijvingBouw.video"
      :title="json.expertises.plaatsbeschrijvingBouw.intro.title"
      :text="json.expertises.plaatsbeschrijvingBouw.intro.text"
    />
    <div class="container my-5">
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Een samenwerking van A tot Z
        </h4>
        <p>
          Onze samenwerking omvat een totaalpakket van advies, raadgeving, afspraak maken, uitvoering van de opdracht
          tot en met de handtekeningen. Wij voorzien in het digitaal aanleveren van de documenten,
          ook voor ondertekening, en voegen het beeldmateriaal daaraan toe zowel met digitale foto's
          en mogelijks met video's in HD.  Ons takenpakket gaat van woningen, appartementen,
          bedrijfsgebouwen, zorginstellingen, wegenis en infrastructuur.
        </p>
      </div>
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Starten er binnenkort grote bouw- of wegeniswerken in uw buurt?
        </h4>
        <p>
          Starten er werken en bent u nog niet gecontacteerd door de tegenpartij voor een plaatsbeschrijving, dan doen
          wij
          dat even voor u. Weigert m’n een plaatsbeschrijving op te maken, dan kijken we samen met u naar verdere opties
          om alsnog uw eigendom te vrijwaren van grote kosten.
        </p>
      </div>
      <div class="my-4">
        <h4 class="text-primary font-weight-light">
          Opleiding gewenst voor uw personeel?
        </h4>
        <p>
          Wij treden op als erkend lesgever voor ondernemingen om het personeel wegwijs te maken om zelf
          plaatsbeschrijvingen op te stellen. Aan de hand van een eigen samengesteld lespakket geven we uw mensen
          beknopt
          mee hoe ze hun eigen plaatsbeschrijving kunnen opmaken om nog sneller te schakelen in het bouwproces.
        </p>
      </div>
    </div>
    <CallToAction
      cta="Jouw plaatsbeschrijving GRATIS uitgevoerd?"
      text="Weet dat sommige verzekeringmaatschappijen voorzien in de polis dat u recht hebt op een gratis
        plaatsbeschrijving als er werken in uw buurt worden uitgevoerd."
      text2="Contacteer ons om hieromtrent meer te weten te komen."
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
