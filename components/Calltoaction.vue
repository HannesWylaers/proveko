<template>
  <div class="bg-primary app-cta">
    <div class="container py-5 d-md-flex justify-content-between align-items-center">
      <div>
        <h5 class="text-white mb-1 font-weight-bold">
          {{ cta }}
        </h5>
        <div class="text-white">
          {{ text }}
        </div>
        <div class="text-white">
          {{ text2 }}
        </div>
      </div>
      <div class="ml-md-4 mt-3">
        <b-button
          variant="primary"
          href="tel:+32495262507"
        >
          <div class="d-flex align-items-center">
            <img src="../assets/icons/phone-white.svg" class="icon mr-2">Bel&nbsp;{{ json.contact.telMobiel }}
          </div>
        </b-button>
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
  props: {
    cta: {
      type: String,
      default: ' ',
    },
    text: {
      type: String,
      default: ' ',
    },
    text2: {
      type: String,
      default: ' ',
    },
  },
  data() {
    return {
      json: dbData,
    };
  },
};
</script>
<style scoped lang="scss">
  .btn-primary {
    border: 1px solid white;
    background-color: #1E88AA;
  }

  .app-cta {
    background-image: url(../static/logoelement_proveko-transparant.svg);
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 50%;
    background-size: 600px auto;
  }
</style>
