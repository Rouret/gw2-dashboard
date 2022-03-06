<template>
  <div>
    <recolte-line
        recolte-name="Champs de la potence"
        way-point="[&BGMAAAA=]"
        :rewards="[ORES.SILVER,ORES.IRON]"
    />
    <recolte-line
        recolte-name="Théâtre des délices"
        way-point="[&BKYCAAA=]"
        :rewards="[ORES.MITHRIL,WOOD.ELDER]"
    />
    <recolte-line
        recolte-name="Détroit de la Malédiction"
        way-point="[&BOUGAAA=]"
        :rewards="[ORES.MITHRIL]"
    />
    <recolte-line
        recolte-name="Crevasses d'Eautrouble"
        way-point="[&BKgCAAA=]"
        :rewards="[ORES.MITHRIL]"
    />
  </div>
</template>

<script>
import RecolteLine from "./RecolteLine";

export default {
  name: "Recolte",
  components: {RecolteLine},
  data: () => ({
    ORES: {
      MITHRIL: {
        url: "https://wiki.guildwars2.com/images/e/ee/Mithril_Ore.png",
        alt: "Minerai de mithril"
      },
      IRON:{
        url: "https://wiki.guildwars2.com/images/8/87/Iron_Ore.png",
        alt: "Minerai de fer"
      },
      SILVER:{
        url: "https://wiki-fr.guildwars2.com/images/thumb/a/a9/Minerai_d%27argent.png/55px-Minerai_d%27argent.png",
        alt: "Minerai d'argent"
      },
    },
    WOOD:{
      ELDER :{
        url: "https://wiki.guildwars2.com/images/a/a7/Elder_Wood_Log.png",
        alt: "Rondin de bois ancestral"
      }
    }
  })
}
</script>

<style scoped>

</style>