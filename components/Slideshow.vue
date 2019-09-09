<template>
  <div class="bg-light py-4">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h1 class="text-primary">
            Zekerheid is uw drijfveer, kwaliteit is die van ons… in alles wat we doen
          </h1>
          <ul>
            <li v-for="(expertise, index) in expertises" :key="index">
              {{ expertise }}
            </li>
          </ul>
          <button type="button" class="btn btn-primary">Lees meer</button>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expertises: ['Plaatsbeschrijvingen', 'Energie & Milieu', 'Vastgoedexpertise', 'Bouwcoördinatie']
    }
  }
}
</script>
