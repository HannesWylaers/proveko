<template>
  <div class="border-primary border-bottom">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src="logo_proveko.svg" width="230" height="70" alt="Proveko" />
        </a>
        <div id="navbarNav" class="collapse navbar-collapse d-flex justify-content-between">
          <ul class="navbar-nav">
            <li v-for="(expertise, index) in expertises" :key="index" class="nav-item active">
              <a class="nav-link" href="#">{{ expertise }}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      expertises: ['Plaatsbeschrijvingen', 'Energie & Milieu', 'Vastgoedexpertise', 'Bouwcoördinatie', 'contact']
    }
  }
}
</script>
