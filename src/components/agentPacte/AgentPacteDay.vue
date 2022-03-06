<template>
  <div>
    <v-card
        class="mx-auto"
        :style="`background-color: ${color}`"
        max-width="500"
        outlined
    >
      <v-list-item three-line>
        <v-list-item-content>

          <v-list-item-title class="text-h5 mb-1">
            {{dayName}}
          </v-list-item-title>
          <v-chip-group
              class=""
              column
              active-class="green--text"
              multiple
          >
            <v-chip
                class="ma-2"
                v-for="waypoint in wayPointList"
                :key="waypoint"
                @click="clipboard(waypoint)"
            >
              {{waypoint}}
            </v-chip>
          </v-chip-group>
        </v-list-item-content>
        <v-list-item-icon style="cursor:pointer;" @click="clipboard(wayPointList.join(' '))">
          <v-icon
              color="orange"
          >mdi-content-copy</v-icon>
        </v-list-item-icon>

      </v-list-item>

    </v-card>
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
  name: "AgentPacteDay",
  props:{
    dayName:String,
    wayPointList: Array,
    isToday: Boolean,
    color: String
  },
  data : () => ({
    snackbar: {
      timeout: 2000,
      text : 'Copié !',
      status: false
    }
  }),
  methods:{
    clipboard(value){
      navigator.clipboard.writeText(value);
      this.snackbar.text = `Copié !`
      this.snackbar.status = true
    }
  }
}
</script>

<style scoped>

</style>