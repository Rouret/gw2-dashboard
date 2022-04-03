<template>
  <div>
    <v-card>
      <v-card-title>
        Nutrition
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          v-model="selected"
          :headers="RECOLTES_DATA.headers"
          :items="RECOLTES_DATA.items"
          :search="search"
          show-select
      >
        <template v-slot:item.rewards="{ item }">
          <v-chip-group>
            <v-chip
                v-for="reward in item.rewards"
                :key="reward.alt"
                class="ma-2"
                color="indigo darken-3"
                outlined
                label
            >
              <v-img
                  left
                  :src="reward.url"
                  :alt="reward.alt"
                  width="20"
                  height="20"
                  class="mr-2"
              >
              </v-img>
              {{reward.alt}}
            </v-chip>
          </v-chip-group>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>

import { Recoltes } from "@/constants/Recoltes";
import {RECOLTES_DATA} from '@/data/recoltes-data';

export default {
  name: "Recolte",
  data: () => ({
    Recoltes,
    RECOLTES_DATA,
    search:"",
    selected:[]
  }),
  methods:{
    customSearch(items, search,filter){
      console.log(items)
      console.log(search)
      console.log(filter)
    }
  }
}
</script>

<style scoped>

</style>