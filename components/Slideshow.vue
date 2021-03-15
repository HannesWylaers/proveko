<template>
  <div class="bg-light app-hero">
    <div class="container">
      <div class="row">
        <div class="col-md-8 py-5">
          <h1 class="text-primary font-weight-normal">
            Zekerheid is uw drijfveer, <br/>kwaliteit is die van ons… <br/>in alles wat we doen
          </h1>
          <div>
            <div v-for="(child, index) in json.nav.children" :key="index">
              <nuxt-link :to="child.path">
                <img src="../assets/icons/check_circle-primary.svg" class="icon mr-2">{{ child.name }}
              </nuxt-link>
            </div>
          </div>
          <b-button
            variant="primary"
            href="/contact"
            class="mt-3">
            Contacteer ons
          </b-button>
        </div>
        <div class="col-md px-0">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { BButton } from 'bootstrap-vue';
import dbData from '../assets/db-data.json';

export default {
  components: {
    BButton,
  },
  data() {
    return {
      json: dbData,
    };
  },
};
</script>
<style>
  @media (min-width: 768px) {
    .app-hero {
      background-image: url("../static/proveko-hero.png");
      height: auto;
      background-position: 70%;
      background-repeat: no-repeat;
      background-size: 60%;
      background-attachment: scroll;
    }
  }

  @media (min-width: 992px) {
    .app-hero {
      background-size: 40%;
      background-position: 80%;
    }
  }

  @media (min-width: 1024px) {
    .app-hero {
      background-size: 37%;
    }
  }

  @media (min-width: 1300px) {
    .app-hero {
      background-size: 30%;
    }
  }

  @media (min-width: 1500px) {
    .app-hero {
      background-position: 75% 30%;
    }
  }

  @media (min-width: 1920px) {
    .app-hero {
      background-position: 70% 30%;
    }
  }

  @media (min-width: 3840px) {
    .app-hero {
      background-position: 58%;
      background-size: 10%;
    }
  }
</style>
