<template>
  <div class="app-nav border-primary border-bottom-thick">
    <div class="container">
      <b-navbar toggleable="lg" class="px-0">
        <b-navbar-brand>
          <nuxt-link to="/" class="navbar-brand">
            <img src="../static/logo_proveko.svg" width="200" height="50" alt="Proveko"></img>
          </nuxt-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <div class="ml-auto">
            <div class="d-md-flex justify-content-md-end">
              <b-navbar-nav>
                <b-nav-item v-for="parent in json.nav.parents" :key="parent.name" :href="parent.path">
                  <small>{{ parent.name }}</small>
                </b-nav-item>
              </b-navbar-nav>
            </div>

            <div class="d-md-flex justify-content-md-end">
              <b-navbar-nav>
                <span
                  v-for="child in json.nav.children"
                  :key="child.name"
                >
                  <b-nav-item v-if="!child.subs" :href="child.path">
                    {{ child.name }}
                  </b-nav-item>

                  <span v-if="child.subs">
                    <b-nav-item-dropdown :text="child.name" right>
                      <b-dropdown-item
                        v-for="sub in child.subs"
                        :key="sub.name"
                        :href="sub.path"
                        class="text-"
                      >
                        {{ sub.name }}
                      </b-dropdown-item>
                    </b-nav-item-dropdown>
                  </span>
              </span>
            </b-navbar-nav>
            </div>
          </div>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { BNavbar, BCollapse } from 'bootstrap-vue';
import dbData from '../assets/db-data.json';

export default {
  components: {
    BNavbar,
    BCollapse,
  },
  data() {
    return {
      json: dbData,
    };
  },
};
</script>
<style>
  .app-nav .nav-item .nav-link {
    padding: .25rem;
  }
  .app-nav.border-bottom-thick {
    border-bottom: 7px solid;
  }
</style>
