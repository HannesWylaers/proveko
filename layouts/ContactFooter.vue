<template>
  <div class="py-5 bg-light">
    <div class="container d-flex">
      <div class="row w-100 pt-2">
        <div class="col">
          <img src="../static/logo_proveko.svg" width="150" height="30" alt="Proveko"></img>
        </div>
        <div class="col-sm mt-4 mt-sm-0">
          <h5>Over Proveko</h5>
          <a v-for="parent in json.nav.parents" class="nav-link px-0" :href="parent.path" role="button" :key="parent.name">
            {{ parent.name }}
          </a>
        </div>
        <div class="col-sm mt-4 mt-sm-0">
          <h5>Expertises</h5>
          <a v-for="child in json.nav.children" class="nav-link px-0" :href="child.path" role="button" :key="child.name">
            {{ child.name }}
          </a>
        </div>
        <div class="col-sm mt-4 mt-sm-0">
          <div class="mb-3">
            <h5>Contact</h5>
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dbData from '../assets/db-data.json';
import ContactInfo from '../components/ContactInfo.vue';

export default {
  components: {
    ContactInfo,
  },
  data() {
    return {
      json: dbData,
    };
  },
};
</script>
<style lang="scss">
  .app-contact {
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>
