<template>
  <v-app>
    <div>
      <v-toolbar
          color="blue"
          dark
          flat
      >
        <v-toolbar-title>GW2 Dashboard daily routine</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs
              v-model="tab"
              align-with-title
          >
            <v-tab>Meta Event</v-tab>
            <v-tab>Récolte</v-tab>
            <v-tab>Agent du pacte</v-tab>
            <v-tab>Coupons</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
    </div>


    <v-main>
      <v-container>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <meta-event/>
          </v-tab-item>
          <v-tab-item>
            <recolte/>
          </v-tab-item>
          <v-tab-item>
            <agent-pacte/>
          </v-tab-item>
        </v-tabs-items>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>


import MetaEvent from "./components/metaevent/MetaEvent";
import AgentPacte from "./components/agentPacte/AgentPacte";
import Recolte from "./components/recolte/Recolte";

export default {
  name: 'App',

  components: {
    Recolte,
    AgentPacte,
    MetaEvent

  },
  data: () => ({
    tab: null,
    items: [
      'web', 'shopping', 'videos', 'images', 'news',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  })
};
</script>

