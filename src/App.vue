<template>
  <v-app>
    <v-navigation-drawer :value="true" fixed app :clipped="$vuetify.breakpoint.lgAndUp">
      <v-list dense>
        <template v-for="item in items">
          <v-layout v-if="item.heading" :key="item.heading" row align-center>
            <v-flex>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
          </v-layout>

          <template v-if="item.children" append-icon>
            <!-- <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>-->
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="(item.text || item.heading) + `${i}`"
              :class="{
              'v-list__tile--active' : i === 1
            }"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

          <v-list-tile v-else :key="item.text">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <nav-bar></nav-bar>

    <v-content>
      <v-container fluid style="display: flex; flex-direction: column; height: 100%;">
        <test-bed style="flex: 1 1 auto;"/>
        <div style="border-top: 1px solid #d3d7d3;"></div>
        <div
          class="disclaimer"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import TestBed from './components/TestBed';
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    TestBed,
    NavBar
  },
  data() {
    return {
      items: [
        { text: 'Home' },
        {
          heading: 'Entities',
          model: true,
          children: [{ text: 'Bob and jane' }, { text: "Bob's trading" }, { text: "Ben's trust" }]
        },
        {
          heading: 'Other reporting groups',
          model: false,
          children: [{ text: 'Keeble performance' }]
        }
      ]
    };
  }
};
</script>

<style lang="stylus">
@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/Proxima-Nova-Reg.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/Proxima-Nova-Sbold.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/Proxima-Nova-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
}

#app {
  font-family: 'Proxima Nova';

  .disclaimer {
    margin: 20px 0;
    font-size: 12px;
    color: #707075;
  }
}
</style>
