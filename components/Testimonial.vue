<template>
  <div class="py-3">
    <div class="card-columns">
      <div v-for="testimonial in json.testimonials" :key="testimonial.id" class="card h-100">
        <div class="card-body">
          <h5 class="card-title">{{ testimonial.aanspreking }}</h5>
          <p class="card-text">{{ testimonial.text }}</p>
          <p class="card-text"><small class="text-muted">{{ testimonial.bedrijf }}</small></p>
        </div>
      </div>
    </div>
  </div>
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
