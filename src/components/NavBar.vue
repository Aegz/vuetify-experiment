<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed
    class="navbar"
  >
    <img src="https://test-cdn.connecthub.com.au/images/logos/CONNECTHUB-REVERSED.png" height="20">
    <v-spacer></v-spacer>
    <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
      <span class="mr-2">Latest Release</span>
      <v-icon>fas fa-external-link-alt</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>

<style lang="stylus">
.theme--light {
  .navbar {
    background-color: #006deb;
    color: #fff;
  }
}
</style>