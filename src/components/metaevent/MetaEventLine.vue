<template>
    <div class="pa-3">
      <v-row class="align-center">
        <v-col cols="1">
          <v-checkbox
              v-model="checkbox"
          ></v-checkbox>
        </v-col>
        <v-col cols="3">
          <span>{{ eventName }}</span>
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
          <v-row class="align-center">
            <v-col cols="2" style="padding-right: 0px">
              <v-icon
                  color="orange"
              >
                mdi-update
              </v-icon>
            </v-col>
            <v-col cols="9" style="padding-left: 0px">
              <span>{{ timing }}</span>
            </v-col>
          </v-row>

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
  name: "MetaEventLine",
  props:{
    eventName : String,
    wayPoint: String,
    timing: String,
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