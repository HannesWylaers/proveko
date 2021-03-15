<template>
  <section class="py-3">
    <div class="card-columns">
      <div v-for="referentie in json.referenties" :key="referentie.id" class="card h-100">
        <div class="card-body">
          <h5 class="card-title">
            {{ referentie.title }}
          </h5>
          <p class="card-text">
            <span class="font-weight-bold">
              {{ referentie.type.label }}
            </span>
            {{ referentie.type.content }}
          </p>
          <p class="card-text">
            <span class="font-weight-bold">
              {{ referentie.locatie.label }}
            </span>
            {{ referentie.locatie.content }}
          </p>
          <p class="card-text">
            <span class="font-weight-bold">
              {{ referentie.architect.label }}
            </span>
            {{ referentie.architect.content }}
          </p>
          <p class="card-text">
            <span class="font-weight-bold">
              {{ referentie.bouwheer.label }}
            </span>
            {{ referentie.bouwheer.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import dbData from '../assets/db-data.json';

export default {
  data() {
    return {
      json: dbData,
    };
  },
};
</script>
