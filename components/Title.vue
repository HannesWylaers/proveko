<template>
  <div :class="bgClass">
    <h3 class="text-uppercase text-primary pt-3">
      {{ title }}
    </h3>
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    bgClass() {
      const classes = ['title'];

      if (this.id === 'vastgoedexpertise') {
        classes.push('py-5 app-vastgoedexpertise');
      }

      if (this.id === 'plaatsbeschrijving') {
        classes.push('py-5 app-plaatsbeschrijving');
      }

      if (this.id === 'energiemilieu') {
        classes.push('py-5 app-energiemilieu');
      }

      if (this.id === 'bouwcoordinatie') {
        classes.push('py-5 app-bouwcoordinatie');
      }

      return classes.join(' ');
    },
  },
};
</script>

<style>
.title {
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}

.app-plaatsbeschrijving {
  background-image: url("../static/img/proveko-plaatsbeschrijving2.jpg");
}

.app-vastgoedexpertise {
  background-image: url("../static/img/bouwexpertise-proveko.jpg");
}

.app-bouwcoordinatie {
  background-image: url("../static/img/bouwcoordinatie-proveko.jpg");
}

.app-energiemilieu {
  background-image: url("../static/img/energie-mileu-proveko.jpg");
}
</style>
