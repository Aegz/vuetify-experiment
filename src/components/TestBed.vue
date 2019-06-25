<template>
  <v-layout wrap align-content-start v-resize="onResize">
    <v-flex xs12>
      <h1>Bob and Someones Account</h1>
    </v-flex>
    <v-flex xs12>
      <v-tabs v-model="active" color="transparent" slider-color="blue">
        <v-tab :ripple="false">Overview</v-tab>
        <v-tab :ripple="false">Investments</v-tab>
        <v-tab :ripple="false">Transactions</v-tab>
        <v-tab-item>1</v-tab-item>
        <v-tab-item>1</v-tab-item>
        <v-tab-item>
          <v-flex xs12>
            <v-layout align-center justify-space-between>
              <span>Total portfolio value</span>
              <v-layout justify-end>
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" flat v-on="on" :ripple="false">
                      3 accounts
                      <v-icon right>fa-caret-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-tile
                      v-for="(item, index) in [{ title: 'Bob 1' }, { title: 'Bob 2' }, { title: 'Bob 3' }]"
                      :key="index"
                    >
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-menu>
              </v-layout>
            </v-layout>
          </v-flex>

          <div class="card">
            <v-layout wrap align-center>
              <v-flex xs8 md5 d-flex>
                <v-layout align-center>
                  <v-select :items="items" label="Start" :menu-props="{ 'offset-y': true }"></v-select>
                  <span style="margin:0 32px;">To</span>
                  <div>
                    <v-select :items="items" label="End" :menu-props="{ 'offset-y': true }"></v-select>
                  </div>
                </v-layout>
              </v-flex>
              <v-flex xs4 md6 offset-md1 d-flex>
                <v-layout align-center>
                  <v-text-field v-model="search" label="Search" required class="hidden-xs-only"></v-text-field>
                  <v-btn flat color="primary">
                    <span class="hidden-xs-only">Download</span>
                    <v-icon right>fa-download</v-icon>
                  </v-btn>
                </v-layout>
              </v-flex>
            </v-layout>

            <div class="table-wrapper">
              <div class="table-wrapper__header">
                <div style="flex:2;display: flex; align-content: center;">
                  <v-icon color="primary" size="18px" left>fa-arrows-alt-v</v-icon>
                  <span>Expand all</span>
                </div>
                <span class="table-wrapper__header__heading">No of transactions</span>
                <span class="table-wrapper__header__heading">Net amount</span>
              </div>
              <v-expansion-panel>
                <v-expansion-panel-content
                  v-for="(item,i) in ['Buys & Sells', 'Income', 'Cash']"
                  :key="i"
                >
                  <template v-slot:actions>
                    <v-icon color="primary">fa-caret-down</v-icon>
                  </template>
                  <div slot="header" style="display:flex;">
                    <h2
                      style="flex: 2;font-size: 16px; font-weight: 600; color: #333333;"
                    >{{ item }}</h2>
                    <span style="font-size: 18px;font-weight: 600;color: #333333;">$23,232,232</span>
                  </div>

                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :expand="false"
                    hide-actions
                    :hide-headers="isMobile"
                  >
                    <template v-slot:items="props">
                      <template v-if="!isMobile">
                        <td class="text-xs-left">{{ props.item.name }}</td>
                        <td class="text-xs-center">
                          <v-chip color="primary" outline>{{ props.item.calories }}</v-chip>
                        </td>
                        <td class="text-xs-right">{{ props.item.fat }}</td>
                        <td class="text-xs-right">{{ props.item.carbs }}</td>
                        <td class="text-xs-right">{{ props.item.protein }}</td>
                        <td class="text-xs-right">{{ props.item.iron }}</td>
                      </template>
                      <tr v-else>
                        <td>
                          <ul class="flex-content">
                            <li class="flex-item" data-label="Name">{{ props.item.name }}</li>
                            <li class="flex-item" data-label="Calories">{{ props.item.calories }}</li>
                            <li class="flex-item" data-label="Fat (g)">{{ props.item.fat }}</li>
                            <li class="flex-item" data-label="Carbs (g)">{{ props.item.carbs }}</li>
                            <li class="flex-item" data-label="Protein (g)">{{ props.item.protein }}</li>
                            <li class="flex-item" data-label="Iron (%)">{{ props.item.iron }}</li>
                          </ul>
                        </td>
                      </tr>
                    </template>
                  </v-data-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </div>

            <v-layout style="margin: 12px 0">
              <span style="flex: 2;font-size: 18px;font-weight: 600;color: #333333;">Total</span>

              <span style="font-size: 18px;font-weight: 600;color: #333333;">$23,232,232</span>
            </v-layout>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    isMobile: false,
    search: null,
    active: 'tab-3',
    items: ['7 days', '14 days'],
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Calories', align: 'right', value: 'calories' },
      { text: 'Fat (g)', align: 'right', value: 'fat' },
      { text: 'Carbs (g)', align: 'right', value: 'carbs' },
      { text: 'Protein (g)', align: 'right', value: 'protein' },
      { text: 'Iron (%)', align: 'right', value: 'iron' }
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        calories: 'buy',
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%'
      },
      {
        name: 'Ice cream sandwich',
        calories: 'buy',
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%'
      },
      {
        name: 'Eclair',
        calories: 'buy',
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%'
      },
      {
        name: 'Cupcake',
        calories: 'buy',
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%'
      },
      {
        name: 'Gingerbread',
        calories: 'buy',
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%'
      },
      {
        name: 'Jelly bean',
        calories: 'buy',
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%'
      },
      {
        name: 'Lollipop',
        calories: 'buy',
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%'
      },
      {
        name: 'Honeycomb',
        calories: 'buy',
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%'
      },
      {
        name: 'Donut',
        calories: 'buy',
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%'
      },
      {
        name: 'KitKat',
        calories: 'buy',
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%'
      }
    ]
  }),
  methods: {
    onResize() {
      if (window.innerWidth < 769) this.isMobile = true;
      else this.isMobile = false;
    }
  }
};
</script>

<style lang="stylus">
#app {
  .card {
    margin-top: 2rem;
    margin-bottom: 2rem;
    background: #fff;
    padding: 26px 30px;
    border: 1px solid #e3e5ef;
    border-radius: 0.5rem;
  }

  .table-wrapper {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);

    &__header {
      display: flex;
      align-content: center;
      padding-bottom: 3px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);

      &__heading {
        font-size: 12px;
        text-align: right;
        color: #707075;
        min-width: 140px;
        margin-left: 10px;
      }
    }
  }
}
</style>
