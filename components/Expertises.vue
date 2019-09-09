<template>
  <section class="container app-card-container py-3">
    <div v-for="expertise in expertises" :key="expertise.id" class="card w-100" style="width: 18rem;">
      <img :src="expertise.img" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title text-primary">{{ expertise.title }}</h5>
        <p class="card-text">{{ expertise.body }}</p>
        <a href="#" class="btn btn-primary">Meer info</a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      expertises: [
        {
          id: '1',
          title: 'Plaatsbeschrijvingen',
          body:
            'Sedert 2006 specialiseren wij ons in de opmaak van plaatsbeschrijving voorafgaande en na beëindigen ' +
            'van huur en bouwwerken. Wij werken in deze opdrachten zowel voor particulieren, aannemers, immo ' +
            'en verzekeringsmaatschappijen. ',
          img: 'proveko-plaatsbeschrijving2.jpg'
        },
        {
          id: '2',
          title: 'Energie & Milieu',
          body:
            'Ons kantoor is sinds 2009 erkend door de Vlaamse Overheid om op te treden als energieadviseur ' +
            'binnen de residentiële bouwwereld. EnergiePrestatieCertificaat, Energieaudit behoren ' +
            'tot ons takenpakket. Ook kunnen wij voor u optreden als erkend keurder voor de verplichte ' +
            'rioleringskeuring bij nieuwbouw en verbouwing.',
          img: 'energie-mileu-proveko.jpg'
        },
        {
          id: '3',
          title: 'Vastgoedexpertise',
          body:
            'Sedert 2015 heben we onze expertise willen verbreden als gerechtsdeskundige. Hierbij treden we op ' +
            'voor bijstand en advies, technisch raadgever, bijstand bij oplevering en vele andere.',
          img: 'bouwexpertise-proveko.jpg'
        },
        {
          id: '4',
          title: 'Bouwcoördinatie',
          body:
            'Met een ervaring en expertise van 15 jaar op de werkvloer treden wij op als contact- en ' +
            'vertrouwenspersoon tussen klant en de bouwpartners. Kwaliteit, budgetbeheer en planning staan voorop ' +
            'in het management van uw project voor zowel nieuwbouw als renovatie.',
          img: 'bouwcoordinatie-proveko.jpg'
        }
      ]
    }
  }
}
</script>
<style>
.app-card-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
}
</style>
