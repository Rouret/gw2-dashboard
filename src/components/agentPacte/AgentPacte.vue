<template>
    <div>
      <v-row>
        <v-col>
          <agent-pacte-day day-name="Lundi" :way-point-list="lundi" color="#E6B8AF"/>
        </v-col>
        <v-col>
          <agent-pacte-day day-name="Mardi" :way-point-list="mardi" color="#D0E0E3"/>
        </v-col>
        <v-col>
          <agent-pacte-day day-name="Mercredi" :way-point-list="mercredi" color="#EAD1DC"/>
        </v-col>
        <v-col>
          <agent-pacte-day day-name="Jeudi" :way-point-list="jeudi" color="#D9EAD3"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <agent-pacte-day day-name="Vendredi" :way-point-list="vendredi" color="#FCE5CD"/>
        </v-col>
        <v-col>
          <agent-pacte-day day-name="Samedi" :way-point-list="samedi" color="#D9D2E9"/>
        </v-col>
        <v-col>
          <agent-pacte-day day-name="Dimanche" :way-point-list="dimanche" color="#FFF2CC"/>
        </v-col>
      </v-row>
    </div>
</template>

<script>
import AgentPacteDay from "./AgentPacteDay";
export default {
  name: "AgentPacte",
  components: {AgentPacteDay},
  data : () => ({
    lundi:["[&BA8CAAA=]","[&BIMCAAA=]","[&BKYBAAA=]","[&BNIEAAA=]","[&BEwDAAA=]","[&BIcHAAA=]"],
    mardi :[ "[&BIMBAAA=]","[&BGQCAAA=]","[&BBkAAAA=]","[&BKgCAAA=]","[&BEgAAAA=]","[&BH8HAAA=]"],
    mercredi : ["[&BPEBAAA=]","[&BDgDAAA=]","[&BKYAAAA=]","[&BP0CAAA=]","[&BMIBAAA=]","[&BH4HAAA=]"],
    jeudi:["[&BOQBAAA=]","[&BF0GAAA=]","[&BIMAAAA=]","[&BO4CAAA=]","[&BE8AAAA=]","[&BKsHAAA=]"],
    vendredi : ["[&BNMAAAA=]","[&BHsBAAA=]","[&BNUGAAA=]","[&BKgCAAA=]","[&BMwCAAA=]","[&BJQHAAA=]"],
    samedi : ["[&BBABAAA=]","[&BEICAAA=]","[&BH8HAAA=]","[&BLkCAAA=]","[&BJIBAAA=]","[&BBEDAAA=]"],
    dimanche : ["[&BCECAAA=]","[&BIUCAAA=]","[&BC0AAAA=]","[&BO4CAAA=]","[&BDoBAAA=]","[&BIkHAAA=]"]
  }),

}
</script>

<style scoped>

</style>