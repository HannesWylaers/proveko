<template>
  <div>
    <section class="container py-3">
      <h3 class="text-uppercase text-primary pt-3">
        Expertises
      </h3>

      <div class="app-card-container">
        <div v-for="expertise in expertises" :key="expertise.id" class="card w-100" style="width: 18rem;">
          <img class="card-img-top" :src="`img/${expertise.img}`" />

          <div class="card-body">
            <h5 class="card-title text-primary">
              {{ expertise.title }}
            </h5>
            <p class="card-text">
              {{ expertise.body }}
            </p>
            <a
              v-for="url in expertise.url"
              :key="url.id"
              :href="url.path"
              class="btn btn-primary"
              :class="expertise.url.length > 1 ? 'ml-1 mt-1' : '' ">
              Meer info <span v-if="expertise.url.length > 1" class="text-white">bij {{url.name}}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
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
            'Sedert 2006 specialiseren wij ons in de opmaak van plaatsbeschrijving voorafgaande en na beëindigen '
            + 'van huur en bouwwerken. Wij werken in deze opdrachten zowel voor particulieren, aannemers, immo '
            + 'en verzekeringsmaatschappijen. ',
          img: 'proveko-plaatsbeschrijving2.jpg',
          url: [
            {
              id: 1,
              name: 'huur',
              path: 'plaatsbeschrijving-huur',
            },
            {
              id: 2,
              name: 'bouw',
              path: 'plaatsbeschrijving-bouw',
            },
          ],
        },
        {
          id: '2',
          title: 'Energie & Milieu',
          body:
            'Ons kantoor is sinds 2009 erkend door de Vlaamse Overheid om op te treden als energieadviseur '
            + 'binnen de residentiële bouwwereld. EnergiePrestatieCertificaat, Energieaudit behoren '
            + 'tot ons takenpakket. Ook kunnen wij voor u optreden als erkend keurder voor de verplichte '
            + 'rioleringskeuring bij nieuwbouw en verbouwing.',
          img: 'energie-mileu-proveko.jpg',
          url: [
            {
              id: 1,
              name: 'energie en milie',
              path: 'energiemilieu',
            },
          ],
        },
        {
          id: '3',
          title: 'Vastgoedexpertise',
          body:
            'Sedert 2015 heben we onze expertise willen verbreden als gerechtsdeskundige. Hierbij treden we op '
            + 'voor bijstand en advies, technisch raadgever, bijstand bij oplevering en vele andere.',
          img: 'bouwexpertise-proveko.jpg',
          url: [
            {
              id: 1,
              name: 'vastgoedexpertise',
              path: 'vastgoedexpertise',
            },
          ],
        },
        {
          id: '4',
          title: 'Bouwcoördinatie',
          body:
            'Met een ervaring en expertise van 20 jaar op de werkvloer treden wij op als contact- en '
            + 'vertrouwenspersoon tussen klant en de bouwpartners. Kwaliteit, budgetbeheer en planning staan voorop '
            + 'in het management van uw project voor zowel nieuwbouw als renovatie.',
          img: 'bouwcoordinatie-proveko.jpg',
          url: [
            {
              id: 1,
              name: 'bouwcoordinatie',
              path: 'bouwcoordinatie',
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
  .card {
    margin-bottom: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px 0 #c1c1c1;
  }

  @media (min-width: 560px) {
    .app-card-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
    }
  }
</style>
