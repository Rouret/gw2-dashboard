<template>
  <div>
    <v-card>
      <v-card-title>
        Récolte
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Rechercher"
            single-line
            hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
          v-model="selected"
          :headers="RECOLTES_DATA.headers"
          :items="RECOLTES_DATA.items"
          :search="search"
          :custom-filter="customSearch"
          item-key="name"
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
        <template v-slot:item.img="{ item }">
          <v-img
              :src="item.img"
              :alt="item.name"
              width="180"
          >
          </v-img>
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
      //recherche par nom
      if(filter.name.toLowerCase().includes(search.toLowerCase())){
        return true;
      }
      //recherche par ressource
      else if(filter.rewards.filter(reward => reward.alt.toLowerCase().includes(search.toLowerCase())).length > 0){
        return true;
      }
      return false;
    }
  }
}
</script>

<style scoped>

</style>