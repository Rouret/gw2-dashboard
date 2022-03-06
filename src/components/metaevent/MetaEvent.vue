<template>
  <div>
    <meta-event-line event-name="Octoliane" wayPoint="[&BMYHAAA=]" timing="XX:00" />
    <meta-event-line event-name="Régents Chaks" wayPoint="[&BPUHAAA=]" timing="XX:30" />
    <meta-event-line event-name="Matriache" wayPoint="[&BAgIAAA=]" timing="XX:08" />
    <meta-event-line event-name="Naked man" wayPoint="X" timing="XX:20" />

    <iframe src="https://gw2.ninja/timer/heart-of-thorns" width="100%" height="400"/>
  </div>
</template>

<script>
import MetaEventLine from "./MetaEventLine";
export default {
  name: "MetaEvent",
  components: {MetaEventLine}
}
</script>

<style scoped>

</style>