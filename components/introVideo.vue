<template>
  <div class="title" :class="bgClass">
    <div class="container py-5">
      <div class="row d-flex align-items-center">
        <div class="col-sm">
          <h3 class="text-white text-uppercase pb-3">
            {{ title }}
          </h3>
          <h6 class="text-white font-weight-light" style="line-height: 1.5">
            {{ text }}
          </h6>
          <h6 class="text-white font-weight-light mt-3" style="line-height: 1.5">
            {{ text2 }}
          </h6>
        </div>
        <div
          v-if="url"
          class="app-video-container col-sm"
        >
          <iframe
            width="560"
            height="315"
            :src="url"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    text2: {
      type: String,
    },
    title: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    url: {
      type: String,
    },
  },
  computed: {
    bgClass() {
      const classes = [];

      if (this.id === 'vastgoedexpertise') {
        classes.push('app-vastgoedexpertise');
      }

      if (this.id === 'plaatsbeschrijving') {
        classes.push('app-plaatsbeschrijving');
      }

      if (this.id === 'energiemilieu') {
        classes.push('app-energiemilieu');
      }

      if (this.id === 'bouwcoordinatie') {
        classes.push('app-bouwcoordinatie');
      }

      if (this.id === 'engineering') {
        classes.push('app-engineering');
      }

      return classes.join(' ');
    },
  },
};
</script>
<style scoped lang="scss">
  .app-video-container {
    overflow: hidden;
    position: relative;
    width:100%;
  }

  .app-video-container::after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }

  .app-video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .title {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 40%;
  }

  .app-plaatsbeschrijving {
    background-image: url("../static/img/proveko-plaatsbeschrijving2-bg.jpg");
  }

  .app-vastgoedexpertise {
    background-image: url("../static/img/bouwexpertise-proveko-bg.jpg");
  }

  .app-bouwcoordinatie {
    background-image: url("../static/img/bouwcoordinatie-proveko-bg.jpg");
  }

  .app-engineering{
    background-image: url("../static/img/bouwcoordinatie-proveko-bg.jpg");
  }

  .app-energiemilieu {
    background-image: url("../static/img/energie-mileu-proveko-bg.jpg");
  }
</style>
