<template>
  <div class="border-primary border-bottom">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <nuxt-link to="/" class="navbar-brand">
          <img src="../assets/images/logo_proveko.svg" width="230" height="70" alt="Proveko"/>
        </nuxt-link>
        <div id="navbarNav" class="collapse navbar-collapse d-flex justify-content-between">
          <ul class="navbar-nav">
            <nuxt-link v-for="(expertise, index) in expertises" :key="index" :to="expertise.path" class="nav-link">
              {{ expertise.name }}
            </nuxt-link>
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
      expertises: [{ name: 'Plaatsbeschrijvingen', path: 'Plaatsbeschrijvingen' }]
    }
  }
}
</script>
<style>
  .brand {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.5em;
    color: #39b982;
    text-decoration: none;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }

  .nav .nav-link {
    box-sizing: border-box;
    margin: 0 5px;
    color: rgba(0, 0, 0, 0.5);
    text-decoration: none;
  }

  .nav .nav-item.router-link-exact-active {
    color: #39b982;
    border-bottom: solid 2px #39b982;
  }

  .nav a {
    display: inline-block;
  }
</style>
