<template>
  <div>
    <div class="mb-2">
      <img class="icon" src="../assets/icons/location_on-primary.svg" />
      {{json.contact.straatEnNr}} - 9870&nbsp;Machelen&nbsp;a/d&nbsp;Leie
    </div>
    <div class="my-2">
      <img class="icon" src="../assets/icons/smartphone-primary.svg" />
      {{json.contact.telMobiel}}
      <div><small>{{json.contact.telInfo}}</small></div>
    </div>
    <div class="my-2">
      <a href="mailto:info@proveko.be">
        <img class="icon" src="../assets/icons/mail-primary.svg" />
        {{json.contact.emailAdres}}
      </a>
    </div>
    <div class="my-2">
      <div>BTW: {{json.contact.btw}} </div>
      <div>IBAN: {{json.contact.iban}} </div>
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
<style lang="scss">
  .icon {
    width: 20px;
    height: 20px;
  }

  .app-contact {
    display: grid;
    grid-template-columns: 50% 50%;
  }
</style>
