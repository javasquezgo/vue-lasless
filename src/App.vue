<template>
  <main>
    <px-header />
    <px-fetaures />
    <px-map />
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader.vue";
import PxFetaures from "@/components/PxFetaures.vue";
import PxMap from "@/components/PxMap.vue";

export default {
  name: "App",
  components: { PxHeader, PxFetaures, PxMap },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
