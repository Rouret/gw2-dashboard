<template>
  <div class="pa-3">
    <v-row class="align-center">
      <v-col cols="1">
        <v-checkbox
            v-model="checkbox"
        ></v-checkbox>
      </v-col>
      <v-col cols="3">
        <span>{{recolteName}}</span>
      </v-col>
      <v-col cols="4" @click="clipboard(wayPoint)">
        <v-row class="align-center">
          <v-col cols="2" style="padding-right: 0px">
            <v-img
                src="https://wiki-fr.guildwars2.com/images/thumb/5/56/Progression_passage.png/20px-Progression_passage.png"
                width="20"
                height="20"
            ></v-img>
          </v-col>
          <v-col cols="9" style="padding-left: 0px">
            <span>{{wayPoint}}</span>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-chip-group>
          <v-chip
              v-for="reward in rewards"
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
      </v-col>
    </v-row>
    <v-snackbar
        v-model="snackbar.status"
        :timeout="snackbar.timeout"
    >
      {{snackbar.text}}
    </v-snackbar>
  </div>

</template>

<script>
export default {
  name: "RecolteLine",
  props:{
    recolteName : String,
    wayPoint: String,
    rewards : Array
  },
  data: () => ({
    checkbox: false,
    snackbar: {
      timeout: 2000,
      text : 'Copié !',
      status: false
    }
  }),
  methods:{
    clipboard(wayPointCode){
      navigator.clipboard.writeText(wayPointCode);
      this.snackbar.text = `${wayPointCode} copié !`
      this.snackbar.status = true
      this.checkbox = true
    }
  }
}
</script>

<style scoped>

</style>